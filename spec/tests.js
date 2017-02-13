// var myTest = require('../spec/test');

describe("Test for Prime numbers", function() {

  it("should return [2, 3, 5] for value of 6", function() {
    expect(function(){ getPrimes(6) == [2, 3, 5]});
  });

 it("should return [] for value of 0", function() {
    expect(function(){ getPrimes() == []});
  });
 it("should throw an exception for negative numbers", function() {
  expect(function(){ getPrimes(negative) }).toThrow();
  });

it("should throw an exception for non-integer numbers", function() {
  expect(function(){ getPrimes(decimal) }).toThrow();
  });
  
  it("should return [2, 3, 5, 7] for value of 10", function() {
    expect(function(){ getPrimes(10) == [2, 3, 5, 7]});
  });

});