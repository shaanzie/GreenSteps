// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "greensteps-8f852.firebaseapp.com",
    databaseURL: "https://greensteps-8f852.firebaseio.com",
    projectId: "greensteps-8f852",
    storageBucket: "",
    messagingSenderId: "401433379611",
    appId: "1:401433379611:web:5159a5c926ecd0b4"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
localStorage.clear();

var db = firebase.firestore();

String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function validate()
{
    var email = document.getElementById('email').value;
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;
    var age = document.getElementById('age').value;
    var name = document.getElementById('name').value;
    if(pass1 == pass2)
    {
        db.collection("Users").add({
            'Name': name,
            'Age': parseInt(age),
            'Email': email,
            'Password': -(pass1.hashCode()),
            'FuelSaved': 0,
            'BusNo': 0,
            'Score': 0
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);

        window.sessionStorage.setItem('Name',name);
        window.location.href = 'loading_page.html';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    else
    {
        alert('Error in signup. Please try again!');
        window.location.reload();
    }

}