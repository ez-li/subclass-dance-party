
var makeLargerDancer = function(top, left, timeBetweenSteps) {
  // this.class = "dancer larger";
  // this.image = "sadcowboy.png"
  //debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src = "sadcowboy.png" height="50"></span>');

};

makeLargerDancer.prototype = Object.create(makeDancer.prototype);

makeLargerDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  //this.left += 400;
  //makeDancer.left += 10;
  //this.$node.toggle();
  //$('.larger').css('border', '10px solid blue');
  this.$node.toggle();


};


