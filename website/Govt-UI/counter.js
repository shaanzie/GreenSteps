$(document).ready(function() {

$('.scoreCounter').each(function() {
  var $this = $(this),
      countTo = 1045;

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 4000,
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

var db = firebase.firestore();
db.collection('Feedback').get().then(snap => {
  window.localStorage.setItem('size',snap.size);
});

//End

var size = parseInt(window.localStorage.getItem('size'));


$('.fuelCounter').each(function() {
  var $this = $(this),
      countTo = size;

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 4000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  //End

});

});