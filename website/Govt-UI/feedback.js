


var db = firebase.firestore();

db.collection('Feedback').get().then((querySnapshot) => {
    var div = document.getElementById('main-div');
    var count = 0;
    var feedback = document.getElementById('feedback');
    querySnapshot.forEach((doc) => {
        count++;
        var cloneFeed = feedback.cloneNode(true);
        var spanCloneText = cloneFeed.querySelector('#feed-text');
        var spanCloneSub = cloneFeed.querySelector('#feed-sub');
        var spanCloneCity = cloneFeed.querySelector('#feed-city');
        spanCloneText.textContent = String(doc.data()['Description']);
        spanCloneSub.textContent = String(doc.data()['Subject']);
        spanCloneCity.textContent = String(doc.data()['City']);
        cloneFeed.setAttribute('style','color: gray; display: all');
        div.appendChild(cloneFeed);
    })

window.localStorage.setItem('feedCount', count);
});