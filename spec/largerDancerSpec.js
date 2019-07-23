describe('largerDancer', function() {

  var largerDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    largerDancer = new makeLargerDancer(10, 20, timeBetweenSteps, 10);
  });

  it('should have a jQuery $node object', function() {
    expect(largerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node enlarge', function() {
    sinon.spy(largerDancer.$node, 'toggle');
    largerDancer.step();
    expect(largerDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(largerDancer, 'step');
      expect(largerDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(largerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(largerDancer.step.callCount).to.be.equal(2);
    });
  });
});
