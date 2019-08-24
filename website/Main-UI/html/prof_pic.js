var db = firebase.firestore();

var email = window.sessionStorage.getItem('Name');

db.collection("Users").where('Email', '==', email).get().then((querySnapshot) => {
    var img_prof = document.getElementById('prof');
    querySnapshot.forEach((doc) => {
    img_prof.setAttribute('src', doc.data()['ProfilePicture']);
    // console.log(doc.data()['ProfilePicture']);
    });
});


db.collection("Users").where('Email', '==', email).get().then((querySnapshot) => {
var img_prof = document.getElementById('prof_pic');
var name = document.getElementById('username');
var buses = document.getElementById('BusNo');
var score = document.getElementById('Score');
var fuel = document.getElementById('Fuel');
var money = document.getElementById('money');
querySnapshot.forEach((doc) => {
    img_prof.setAttribute('src', doc.data()['ProfilePicture']);
    name.innerHTML = doc.data()['Name'];
    buses.innerHTML = doc.data()['BusNo'];
    score.innerHTML = doc.data()['Score'];
    fuel.innerHTML = doc.data()['FuelSaved'];
    money.innerHTML = doc.data()['MoneySaved'];
    console.log(doc.data()['ProfilePicture']);
});
});