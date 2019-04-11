describe("Calculator", function() {
  var calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Arithmetic operations on an input array", function() {
    it("creates a new Calculator", function() {
      expect(calculator).not.to.equal(null);
     });

    it("adds numbers together properly", function() {
      expect(calculator.add([1,0])).to.equal(1);
      expect(calculator.add([5, 6])).to.equal(11);
      expect(calculator.add([1,2,3])).to.equal(6);
    });

    it("multiplies numbers properly", function(){
      expect(calculator.multiply([1,2])).to.equal(2);
      expect(calculator.multiply([5, 6, 7])).to.equal(210);
      expect(calculator.multiply([5, 0, 6])).to.equal(0);
    });

    it("subtracts numbers properly", function(){
      expect(calculator.subtract([3,2])).to.equal(1);
      expect(calculator.subtract([5, 4, 1])).to.equal(0);
    });

    it("returns the proper quotient of the numbers passed in", function(){
      expect(calculator.divide([10,2,5])).to.equal(1);
    });
  });
});
