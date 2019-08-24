

var db = firebase.firestore();

var email = window.sessionStorage.getItem('Name');

var scoreCounter;
var moneyCounter;
var fuelCounter;

db.collection("Users").where('Email', '==', email).get().then((querySnapshot) => {


querySnapshot.forEach((doc) => {

scoreCounter = doc.data()['Score'];
moneyCounter = doc.data()['MoneySaved'];
fuelCounter = doc.data()['FuelSaved'];
})

});

$(document).ready(function() {
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

$(document).ready(function() {
  $('.moneyCounter').each(function() {
    var $this = $(this),
        countTo = moneyCounter;
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
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
$(document).ready(function() {
  $('.fuelCounter').each(function() {
    var $this = $(this),
        countTo = fuelCounter;
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
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