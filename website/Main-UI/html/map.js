var mymap = L.map('mapid').setView([13.0288449, 77.5684788], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1Ijoic2hhYW56aWUiLCJhIjoiY2p6ZHZkYzZsMGI4YTNxdWkxN2V0MHFpZCJ9.qlZ4os6Nml1sdBBuYHdTAA'
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
      console.log(data);
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
        url: "http://localhost:5000/api/v1/cost/",
        success: function(data) {
          console.log(data);
          //message box of success here
          //prettify cost
          window.localStorage.cost=data;
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

