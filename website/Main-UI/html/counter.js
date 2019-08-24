

var db = firebase.firestore();

var email = window.sessionStorage.getItem('Name');

var scoreCounter;
var moneyCounter;
var fuelCounter;
var treeCounter;

db.collection("Users").where('Email', '==', email).get().then((querySnapshot) => {


querySnapshot.forEach((doc) => {

scoreCounter = doc.data()['Score'];
// moneyCounter = doc.data()['MoneySaved'];
// fuelCounter = doc.data()['FuelSaved'];
// treeCounter = doc.data()['TreesPlanted'];
// alert(treeCounter);

window.localStorage.setItem('TreesPlanted',doc.data()['TreesPlanted']);

moneyCounter = doc.data()['MoneySaved'];
    var sum = 0;
    moneyCounter.forEach(element => {
       sum+=element 
    });
fuelCounter = doc.data()['FuelSaved'];
    var sum2 = 0;
    fuelCounter.forEach(element => {
       sum2+=element 
    });

    window.localStorage.setItem('MoneySum', sum);
    window.localStorage.setItem('FuelSum', sum2);

$('.scoreCounter').each(function() {
  var $this = $(this),
      countTo = scoreCounter;

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});

});

$('.moneyCounter').each(function() {
  var $this = $(this),
      countTo = window.localStorage.getItem('MoneySum');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('.fuelCounter').each(function() {
  var $this = $(this),
      countTo = window.localStorage.getItem('FuelSum');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});




  $('.treeCounter').each(function() {
    var $this = $(this),
        countTo = window.localStorage.TreesPlanted;
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
  
      duration: 5000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
    
  });
});

