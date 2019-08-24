var firebaseConfig = {
    apiKey: "AIzaSyAGdIIE4HmuF5hhCLky5V5llWui1lRGhLo",
    authDomain: "greensteps-8f852.firebaseapp.com",
    databaseURL: "https://greensteps-8f852.firebaseio.com",
    projectId: "greensteps-8f852",
    storageBucket: "",
    messagingSenderId: "401433379611",
    appId: "1:401433379611:web:5159a5c926ecd0b4"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var name = window.sessionStorage.getItem('Name');
if(!name)
{
    alert("Logout!");
    window.location.href = "signup.html";
}

var bus = document.getElementById('BusNo');

db.collection("Users").where('Name', '==', name).get()
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
