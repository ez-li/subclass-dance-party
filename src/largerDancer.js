
var makeLargerDancer = function(top, left, timeBetweenSteps) {
  this.class = "dancer larger";
  this.image = "sadcowboy.png"
  debugger;
  //this.$node = $('<img class="dancerImg" src = "src/sadcowboy.png" height="50">');
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log()
  //this.$node.css.append('background-image: url("sadcowboy.png")');
  // this.$node = $('<span class="dancer larger"><img class="sadcowboy" src = "sadcowboy.png"></img></span>');
};

makeLargerDancer.prototype = Object.create(makeDancer.prototype);

makeLargerDancer.prototype.step = function() {

  this.$node
  makeDancer.prototype.step.call(this);
  //this.left += 400;
  //makeDancer.left += 10;
  //this.$node.toggle();
  //$('.larger').css('border', '10px solid blue');
  this.$node.toggle();


};



$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButtonLrg').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

  });
});

