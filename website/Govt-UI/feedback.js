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

db.collection('Feedback').get().then((querySnapshot) => {
    var div = document.getElementById('main-div');
    var feedback = document.getElementById('feedback');
    querySnapshot.forEach((doc) => {
        var cloneFeed = feedback.cloneNode(true);
        var spanCloneText = cloneList.querySelector('#feed-text');
        var spanCloneSub = cloneList.querySelector('#feed-sub');
        var spanCloneCity = cloneList.querySelector('#feed-city');
        spanCloneText.textContent = String(doc.data()['Description']);
        spanCloneSub.textContent = String(doc.data()['Subject']);
        spanCloneCity.textContent = String(doc.data()['City']);
        cloneFeed.setAttribute('style','color: gray; display: all');
        div.appendChild(cloneFeed);
        console.log("Something");
    })
});