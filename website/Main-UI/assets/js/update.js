var db = firebase.firestore();

var email = window.localStorage.getItem('Name');

db.collection('Users').where('Email', '==', email).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        doc.data()['Score'] += window.localStorage.getItem('scoreEarned');
        doc.data()['FuelSaved'][0] += window.localStorage.getItem('fuel');
        doc.data()['MoneySaved'][0] += window.localStorage.getItem('cost');
    });

});

function clear(){
window.localStorage.removeItem('scoreEarned');
window.localStorage.removeItem('fuel');
window.localStorage.removeItem('cost');
}