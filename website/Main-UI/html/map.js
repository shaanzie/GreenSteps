var mymap = L.map('mapid').setView([13.0288449, 77.5684788], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1Ijoic2hhYW56aWUiLCJhIjoiY2p6ZHZkYzZsMGI4YTNxdWkxN2V0MHFpZCJ9.qlZ4os6Nml1sdBBuYHdTAA'
}).addTo(mymap);

var source = document.getElementById('source').value;
var dest = document.getElementById('dest').value;

var route = {
    source: source,
    destination: dest
};

function getroute()
{
    var coords = routeSent; //Add routeSent
    window.location.reload();
    L.Routing.control({
    waypoints: [
    L.latLng(coords.source),
    L.latLng(coords.dest)
    ]
    }).addTo(mymap);

    var db = firebase.firestore();
    var email = window.localStorage.getItem('Name');

    db.collection("Users").where("Email", "==", email)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          // Build doc ref from doc.id
          db.collection("Users").doc(doc.id).update({TreesPlanted: window.localStorage.getItem('TreesPlanted')+1});
      });
 })
}

