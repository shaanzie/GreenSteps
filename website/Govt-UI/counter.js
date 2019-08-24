$(document).ready(function() {

$('.scoreCounter').each(function() {
  var $this = $(this),
      countTo = 10456;

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

//End

$('.treeCounter').each(function() {
  var $this = $(this),
      countTo = 1;

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