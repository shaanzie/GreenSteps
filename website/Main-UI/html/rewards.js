db = firebase.firestore();

db.collection("Products").get().then((querySnapshot) => {
    var counter = 0;
    var main_list = document.getElementById('product_list');
    querySnapshot.forEach((doc) => {
        var listElement = document.getElementById('product');
        var cloneList = listElement.cloneNode(true);
        var spanClonePrice = cloneList.querySelector('#price');
        var spanCloneName = cloneList.querySelector('#name');
        var spanCloneStock = cloneList.querySelector('#stock')
        var imgTag = cloneList.querySelector('#photo');
        imgTag.setAttribute('src', doc.data()['RewardImage']);
        spanCloneName.textContent = String(doc.data()['Name']);
        spanClonePrice.textContent = "Points Required: " + String(doc.data()['Price']);
        spanCloneStock.textContent = "In Stock: " + String(doc.data()['Stock']);
        cloneList.setAttribute('id',counter++);
        cloneList.setAttribute('style','display: block');
        main_list.appendChild(cloneList);
    });
});