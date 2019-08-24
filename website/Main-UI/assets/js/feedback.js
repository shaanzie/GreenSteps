var db = firebase.firestore();


function send() {
    var sub = document.getElementById('sub').value;
var city = document.getElementById('city').value;
var desc = document.getElementById('desc').value;
db.collection('Feedback').doc().set({
    'Subject': sub,
    'City': city,
    'Description': desc
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}