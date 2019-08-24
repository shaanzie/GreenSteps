const assert = require('assert');
const fetch = require('node-fetch');
const fs = require('fs');
describe('gmaps scraper', () => {
    it('sets source and destination', () => {
        var sourcedest=process.argv[5].split("+");
        browser.url("https://www.ecosia.org/?c=en");
        var recsource=sourcedest[0];
        var recdest=sourcedest[1];
        recsource=recsource.split("_").join(' ');
        recdest=recdest.split("_").join(' ');
        $("input[placeholder*='Search the web']").setValue("Coordinates of "+recsource);
        $("button[icon='search']").click();
        browser.pause(5000);
        browser.url("https://www.google.com/maps");
        $("#searchboxinput").setValue(recsource);
        $("#searchbox-searchbutton").click();
        browser.pause(5000);
        url=browser.getUrl();
        url=url.split("@")[1].split(",");
        const latlongsource=url[0]+","+url[1];
        browser.pause(3000);
        $("#searchboxinput").setValue(recdest);
        $("#searchbox-searchbutton").click();
        browser.pause(5000);
        url=browser.getUrl();
        url=url.split("@")[1].split(",");
        const latlongdest=url[0]+","+url[1];
        const coords=latlongsource+"\n"+latlongdest;
        browser.url('https://www.google.com/maps/dir/');
        browser.pause(5000);
        const source=$("input[placeholder*='Choose starting point']");
        source.setValue(recsource);
        const dest=$("input[placeholder*='Choose destination']");
        dest.setValue(recdest);
        browser.pause(3000);
        $("button[aria-label='Search']").click();
        browser.pause(3000);
        $("button[aria-label='Search']").click();
        browser.pause(5000);
        const dist = $("div[class='section-directions-trip-distance section-directions-trip-secondary-text']").getText();
        $("div[aria-label='Transit']").click();
        browser.pause(5000);
        const routes=$("#section-directions-trip-0");
        routes.click();
        browser.pause(3000);
        $("button[class*='section-schedule-explorer-label']").click();
        browser.pause(5000);
        var list = $('#last-focusable-in-modal');
        var count = parseInt(list.getAttribute('data-tripindex'));
        var text=[];
        for(var i=0;i<3;i++){
            list.click();
            browser.waitUntil(() => {
                return $('.waypoint').isExisting() && $("span[class='directions-mode-group closed']").isExisting();
              }, 5000, 'expected routes to exist');
            var waypoints=$$(".waypoint").map(item=>item.getText());
            var transit=$$("span[class='directions-mode-group closed']").map(item=>item.getText());
            console.log(waypoints);
            console.log(transit);
            var cost=$("span[class='section-directions-trip-secondary-text']").getText();
            transroute=transit.map(function(step){
                step=step+"\n";
                return step;
            });
            text[i]=waypoints[0]+"\n"+transroute+waypoints[1]+"\n"+"cost:"+cost+"\n"+"dist:"+dist+"\n";
            $("button[class*='section-schedule-explorer-label']").click();
            browser.pause(3000);
            list=$('li[data-tripindex='+'"'+parseInt(count+parseInt(i+1))+'"'+']');
        }
            fs.writeFile('timings.txt',coords+"\n"+text+"\n", function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
    })
});