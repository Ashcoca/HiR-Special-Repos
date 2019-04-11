describe("Calculator", function() {
  var calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Arithmetic operations on an input array", function() {
    it("creates a new Calculator", function() {
      expect(calculator).not.to.equal(null);
     });

    it("should add numbers", function() {
      expect(calculator.add([1, 0])).to.equal(1);
      expect(calculator.add([5, 6])).to.equal(11);
      expect(calculator.add([1,2,3])).to.equal(6);
    });

    it("should multiply numbers", function() {
      expect(calculator.multiply([1, 2])).to.equal(2);
      expect(calculator.multiply([5, 6, 7])).to.equal(210);
      expect(calculator.multiply([5, 0, 6])).to.equal(0);
    });

    it("should subtract numbers", function() {
      expect(calculator.subtract([3, 2])).to.equal(1);
      expect(calculator.subtract([5, 4, 1])).to.equal(0);
    });

    it("should divide numbers", function() {
      expect(calculator.divide([10, 2, 5])).to.equal(1);
      expect(calculator.divide([40, 2])).to.equal(20);
      expect(calculator.divide([0, 2])).to.equal(0);
    });
  });
});

