var db = firebase.firestore();

var email = window.sessionStorage.getItem('Name');

db.collection("Users").where('Email', '==', email).get().then((querySnapshot) => {
    var img_prof = document.getElementById('prof');
    querySnapshot.forEach((doc) => {
    img_prof.setAttribute('src', doc.data()['ProfilePicture']);
    // console.log(doc.data()['ProfilePicture']);
    });
});

$(document).ready(function() {
    var arr;
db.collection("Users").where('Email', '==', email).get().then((querySnapshot) => {
var img_prof = document.getElementById('prof_pic');
var name = document.getElementById('username');
var buses = document.getElementById('BusNo');
var score = document.getElementById('Score');
var fuel = document.getElementById('Fuel');
var money = document.getElementById('money');
var graph_fuel = document.getElementById('litres');
var graph_money = document.getElementById('MoneySaved');

querySnapshot.forEach((doc) => {
    img_prof.setAttribute('src', doc.data()['ProfilePicture']);
    name.innerHTML = doc.data()['Name'];
    buses.innerHTML = doc.data()['BusNo'];
    score.innerHTML = doc.data()['Score'];
    fuel.innerHTML = window.localStorage.getItem('FuelSum');
    // money.innerHTML = doc.data()['MoneySaved'];

    
    
    mon = doc.data()['MoneySaved'];
    var sum = 0;
    mon.forEach(element => {
       sum+=element 
    });
    fuel = doc.data()['FuelSaved'];
    var sum2 = 0;
    fuel.forEach(element => {
       sum2+=element 
    });
    graph_fuel.innerHTML = '<i class="tim-icons icon-bell-55 text-primary "></i>' + sum2 + " L";
    MoneySaved.innerHTML = '<i class="tim-icons icon-send text-success "></i>' + sum + " INR";

});
});
    
});