// pseudoclassical instantiation

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //
  //this.class = "dancer blinky";
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function() {
  // invoke the makeDancer prototype method step, passing in this step function and this timeBetweenSteps
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  // this.left += 400;
};



