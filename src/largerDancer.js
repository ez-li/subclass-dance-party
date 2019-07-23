
var makeLargerDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeLargerDancer.prototype = Object.create(makeDancer.prototype);

makeLargerDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  //var el = document.getElementByClass("addDancerButton")
  //el.style.border += 10;
  // for (var i = 0; i < this.timeBetweenSteps; i ++) {
  //   this.$node.css("border") += 10;
  // }

};


