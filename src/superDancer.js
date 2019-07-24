
var makeHorseDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer"><img src = "horse.png" height = "200" width="200"></img></span>');
  // this.$node.css.top = this.top;
  // this.$node.css.left = this.left;


};

makeHorseDancer.prototype = Object.create(makeDancer.prototype);

makeHorseDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};




