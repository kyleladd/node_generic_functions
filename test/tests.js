// var expect = require('expect.js');
var chai = require('chai');
// var spies = require('chai-spies');

// chai.use(spies);

// var sinon = require("sinon");
// var sinonChai = require("sinon-chai");
// chai.should();
// chai.use(sinonChai);


var should = chai.should();
var expect = chai.expect;



var genericfunctions = require('../genericfunctions.js');

describe("Generic Functions", function(){
  describe("convertToInttime function", function(){
    it("should convert time '1:00 p.m.' to 1300", function(){
      expect(genericfunctions.convertToInttime("1:00 p.m.")).to.equal(1300);
    });
    it("should convert time '1:00 p.m.' to 1300", function(){
      expect(genericfunctions.convertToInttime("1:00 p.m.")).to.equal(1300);
    });
    it("should convert time '11:00am' to 1100", function(){
      expect(genericfunctions.convertToInttime("11:00am")).to.equal(1100);
    });
    it("should convert time '2300' to 2300", function(){
      expect(genericfunctions.convertToInttime("2300")).to.equal(2300);
    });
    it("should convert time '23:00' to 2300", function(){
      expect(genericfunctions.convertToInttime("23:00")).to.equal(2300);
    });
    it("should convert time '12:00am' to 0", function(){
      expect(genericfunctions.convertToInttime("12:00am")).to.equal(0);
    });
    it("should convert time '12:00pm' to 1200", function(){
      expect(genericfunctions.convertToInttime("12:00pm")).to.equal(1200);
    });
    it("should convert time '09:00pm' to 2100", function(){
      expect(genericfunctions.convertToInttime("09:00pm")).to.equal(2100);
    });
    it("should convert time '9:00pm' to 2100", function(){
      expect(genericfunctions.convertToInttime("9:00pm")).to.equal(2100);
    });
    it("should convert time '9:30pm' to 2130", function(){
      expect(genericfunctions.convertToInttime("9:30pm")).to.equal(2130);
    });
  });

  describe("convertIntToStrTime function", function(){
    it("should convert time 1300 to '1:00pm'", function(){
      expect(genericfunctions.convertIntToStrTime(1300)).to.equal("1:00pm");
    });
    it("should convert time 100 to '1:00am'", function(){
      expect(genericfunctions.convertIntToStrTime(100)).to.equal("1:00am");
    });
    it("should convert time 1200 to '12:00pm'", function(){
      expect(genericfunctions.convertIntToStrTime(1200)).to.equal("12:00pm");
    });
    it("should convert time 0 to '12:00am'", function(){
      expect(genericfunctions.convertIntToStrTime(0)).to.equal("12:00am");
    });
  });

  describe("convertToBit function", function(){
    it("should convertToBit '1' to 1", function(){
      expect(genericfunctions.convertToBit("1")).to.equal(1);
    });
    it("should convertToBit '0' to 0", function(){
      expect(genericfunctions.convertToBit("0")).to.equal(0);
    });
    it("should convertToBit 1 to 1", function(){
      expect(genericfunctions.convertToBit(1)).to.equal(1);
    });
    it("should convertToBit 0 to 0", function(){
      expect(genericfunctions.convertToBit(0)).to.equal(0);
    });
    it("should convertToBit '' to 0", function(){
      expect(genericfunctions.convertToBit("")).to.equal(0);
    });
    it("should convertToBit ' ' to 0", function(){
      expect(genericfunctions.convertToBit(" ")).to.equal(0);
    });
    it("should convertToBit 'true' to 1", function(){
      expect(genericfunctions.convertToBit("true")).to.equal(1);
    });
    it("should convertToBit 'false' to 0", function(){
      expect(genericfunctions.convertToBit("false")).to.equal(0);
    });
    it("should convertToBit true to 1", function(){
      expect(genericfunctions.convertToBit(true)).to.equal(1);
    });
    it("should convertToBit false to 0", function(){
      expect(genericfunctions.convertToBit(false)).to.equal(0);
    });
    it("should convertToBit 'M' to 1", function(){
      expect(genericfunctions.convertToBit("M")).to.equal(1);
    });
  });
  describe("remove function", function(){
    //Not being used yet.
  });
  describe("searchList function", function(){
    //Deprecated: Replaced by searchListDictionaries
  });
  describe("searchListDictionaries function", function(){
    it("should match identical dictionaries", function(){
      chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1"}],{a:"1"}), {a:"1"});
    });
    it("should match identical dictionaries within list of dictionaries", function(){
      chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1"},{b:"2"},{c:"3"}],{b:"2"}), {b:"2"});
    });
    it("should match dictionary with multiple properties on one k:v pair", function(){
      chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1",d:"5"},{b:"2",d:"5"},{c:"3",d:"5"}],{b:"2"}), {b:"2",d:"5"});
    });
    it("should match dictionary with multiple properties on all passed in k:v pairs", function(){
      chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1",d:"5",e:"6"},{b:"2",d:"5",e:"6"},{c:"3",d:"5",e:"6"}],{b:"2",e:"6"}), {b:"2",d:"5",e:"6"});
    });
    it("should return null when no matches are found", function(){
      chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1",d:"5",e:"6"},{b:"2",d:"5",e:"6"},{c:"3",d:"5",e:"6"}],{b:"2",e:"6",f:"2"}), null);
    });
    it("should return first result when there are multiple matches", function(){
      chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1",d:"5",e:"6"},{b:"2",d:"5",e:"6"},{c:"3",d:"5",e:"6"}],{d:"5"}), {a:"1",d:"5",e:"6"});
    });
  });
  describe("rtrim function", function(){
    //Not being used yet.
  });
  describe("toBoolean function", function(){
    it("should convert bool true to true", function(){
      expect(genericfunctions.toBoolean(true)).to.equal(true);
    });
    it("should convert string 'true' to true", function(){
      expect(genericfunctions.toBoolean("true")).to.equal(true);
    });
    it("should convert bool false to false", function(){
      expect(genericfunctions.toBoolean(false)).to.equal(false);
    });
    it("should convert string 'false' to false", function(){
      expect(genericfunctions.toBoolean("false")).to.equal(false);
    });
    it("should convert string 'random' to false", function(){
      expect(genericfunctions.toBoolean("random")).to.equal(false);
    });
  });
  describe("isInteger function", function(){
    it("should return 2 = true", function(){
      expect(genericfunctions.isInteger(2)).to.equal(true);
    });
    it("should return -2 = true", function(){
      expect(genericfunctions.isInteger(-2)).to.equal(true);
    });
    it("should return 1.2 = false", function(){
      expect(genericfunctions.isInteger(1.2)).to.equal(false);
    });
    it("should return -1.2 = false", function(){
      expect(genericfunctions.isInteger(-1.2)).to.equal(false);
    });
    it("should return 2.0 = true", function(){
      expect(genericfunctions.isInteger(2.0)).to.equal(true);
    });
    it("should return '1' = false", function(){
      expect(genericfunctions.isInteger("1")).to.equal(false);
    });
    it("should return '' = false", function(){
      expect(genericfunctions.isInteger("")).to.equal(false);
    });
  });
});