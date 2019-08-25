var mymap = L.map('mapid').setView([13.0288449, 77.5684788], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: ''
}).addTo(mymap);

function foobar(){
var source = document.getElementById('source').value;
var dest = document.getElementById('dest').value;
source=source.split(' ').join("_");
dest=dest.split(' ').join("_");
var route = {
    source: source,
    destination: dest
};
$.ajax({
    type: 'GET',
    url: "http://localhost:5000/api/v1/routes/"+route['source']+"/"+route['destination'],
    success: function(data) {
      // alert(typeof(data));
      createDiv(data);
      //message box of success here
      //popup('true');
      //data to be prettif-ied pls thx
      source=data[0][0].replace(/(\r\n|\n|\r)/gm, "");
      dest=data[0][1].replace(/(\r\n|\n|\r)/gm, "");
      window.localStorage.setItem("source",source);
      window.localStorage.setItem("dest",dest);
      cost();
      fuel();
    },
    error: function(data){
      //popup('false');
      console.log("failed");
      //message box of failure here
    }
  }); 
}
function cost(){
    $.ajax({
        type: 'GET',
        url: "http://localhost:5000/api/v1/cost",
        success: function(data) {
          console.log(data);
          //message box of success here
          //prettify cost
          document.querySelector(".leaflet-routing-container").style.display = "none";
          window.localStorage.setItem('cost',data);
        },
        error: function(data){
          //popup('false');
          console.log("failed");
          //message box of failure here
        }
      }); 
}

function fuel(){
    $.ajax({
        type: 'GET',
        url: "http://localhost:5000/api/v1/fuel",
        success: function(data) {
          console.log(data);
          //message box of success here
          window.localStorage.fuel=data;
        },
        error: function(data){
          //popup('false');
          console.log("failed");
          //message box of failure here
        }
      }); 
}
function getroute()
{
    foobar();
    //window.location.reload();
    var source=window.localStorage.source.split(",");
    var dest=window.localStorage.dest.split(",");
    console.log(source+" "+dest);
    L.Routing.control({
    waypoints: [
    L.latLng(source),
    L.latLng(dest)
    ]
    }).addTo(mymap);
}

function createDiv(data)
{
  var count = 0;
  console.log(data);
  var routes = document.getElementById('routes');
  var btn = document.getElementById('opt');
  btn.style.display = 'inherit';
  data.forEach(function(step) {
    if(count >= 1 && count< data.length-3){
      
      var new_div = document.createElement('div');
      new_div.style.color = "aliceblue";
      var hrlines = document.createElement("hr");
      new_div.textContent=String(step).split(';')[1];
      routes.parentNode.appendChild(hrlines);
      routes.parentNode.appendChild(new_div);
    }
    count++;
    
  });
}

function spinner()
{
  window.location.href = "/home/shaanzie/Desktop/COding/GreenSteps/website/Main-UI/html/spinner.html";
}