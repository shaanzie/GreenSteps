// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAGdIIE4HmuF5hhCLky5V5llWui1lRGhLo",
//     authDomain: "greensteps-8f852.firebaseapp.com",
//     databaseURL: "https://greensteps-8f852.firebaseio.com",
//     projectId: "greensteps-8f852",
//     storageBucket: "",
//     messagingSenderId: "401433379611",
//     appId: "1:401433379611:web:5159a5c926ecd0b4"
//     };
//     // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

var email = window.sessionStorage.getItem('Name');


var db = firebase.firestore();
window.onload = function () {
    var head = document.getElementById('topper');
    var lead = document.querySelector('table');

    var listElement = document.getElementById('data');
db.collection("Users").orderBy('Score','desc').get().then((querySnapshot) => {
    var counter = 0;
    querySnapshot.forEach((doc) => {
        var cloneList = listElement.cloneNode(true);
        var spanCloneSlNo = cloneList.querySelector('#slno');
        var spanCloneName = cloneList.querySelector('#name');
        var spanCloneScore = cloneList.querySelector('#score');
        var spanCloneCity = cloneList.querySelector('#city')
        spanCloneName.textContent = String(doc.data()['Name']);
        spanCloneScore.textContent =String(doc.data()['Score']);
        spanCloneCity.textContent = String(doc.data()['City']);
        if(email == String(doc.data()['Email']))
        {
            rank = counter+1;
            head.innerHTML = 'Your rank: ' + rank;
        }
        cloneList.setAttribute('id',counter++);
        spanCloneSlNo.textContent = counter;
        if(counter == 1)
        {
            cloneList.setAttribute('style','font-weight: bold;')
        }
        cloneList.setAttribute('style','color: gray; display: all');
        lead.appendChild(cloneList);
        
    });
});

 

// var topUserPostsRef = db.collection('Users').orderBy('Score');
// console.log(topUserPostsRef);
}

