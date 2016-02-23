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
  describe("convertToInttime  function", function(){
    it("should convert time '1:00 p.m.' to 1300", function(){
      expect(genericfunctions.convertToInttime ("1:00 p.m.")).to.equal(1300);
    });
    it("should convert time '1:00 p.m.' to 1300", function(){
      expect(genericfunctions.convertToInttime ("1:00 p.m.")).to.equal(1300);
    });
    it("should convert time '11:00am' to 1100", function(){
      expect(genericfunctions.convertToInttime ("11:00am")).to.equal(1100);
    });
    it("should convert time '2300' to 2300", function(){
      expect(genericfunctions.convertToInttime ("2300")).to.equal(2300);
    });
    it("should convert time '23:00' to 2300", function(){
      expect(genericfunctions.convertToInttime ("23:00")).to.equal(2300);
    });
    it("should convert time '12:00am' to 0", function(){
      expect(genericfunctions.convertToInttime ("12:00am")).to.equal(0);
    });
    it("should convert time '12:00pm' to 1200", function(){
      expect(genericfunctions.convertToInttime ("12:00pm")).to.equal(1200);
    });
    it("should convert time '09:00pm' to 2100", function(){
      expect(genericfunctions.convertToInttime ("09:00pm")).to.equal(2100);
    });
    it("should convert time '9:00pm' to 2100", function(){
      expect(genericfunctions.convertToInttime ("9:00pm")).to.equal(2100);
    });
    it("should convert time '9:30pm' to 2130", function(){
      expect(genericfunctions.convertToInttime ("9:30pm")).to.equal(2130);
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
    it("should remove 'needle when found' to 1", function(){
      var mylist = ["hi","bye","welcome","goodbye"]
      expect(genericfunctions.remove(mylist,"bye")).to.deep.equal(["hi","welcome","goodbye"]);
    });
    it("should remove have no effect if needle not found in list", function(){
      var mylist = ["hi","bye","welcome"]
      expect(genericfunctions.remove(mylist,"unique")).to.deep.equal(["hi","bye","welcome"]);
    });
    it("should remove all instances of needle from list", function(){
      var mylist = ["hi","bye","bye","welcome"]
      expect(genericfunctions.remove(mylist,"bye")).to.deep.equal(["hi","welcome"]);
    });
  });
  describe("searchList function", function(){
    //Deprecated: Replaced by searchListDictionaries
  });
  describe("searchListDictionaries function", function(){
    describe("searchListDictionaries function - return matching object", function(){
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
    describe("searchListDictionaries function - return index", function(){
      // Return index
      it("should return first result when there are multiple matches", function(){
        chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1",d:"5",e:"6"},{b:"2",d:"5",e:"6"},{c:"3",d:"5",e:"6"}],{d:"5"},true), 0);
      });
      it("should return null when no matches are found", function(){
        chai.assert.deepEqual(genericfunctions.searchListDictionaries([{a:"1",d:"5",e:"6"},{b:"2",d:"5",e:"6"},{c:"3",d:"5",e:"6"}],{b:"2",e:"6",f:"2"},true), -1);
      });
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
  describe("IsEmpty function", function(){
    it("empty", function(){
      expect(genericfunctions.isEmpty({})).to.equal(true);
    });
    it("not empty", function(){
      expect(genericfunctions.isEmpty({property:"value"})).to.equal(false);
    });
    it("list is empty", function(){
      expect(genericfunctions.isEmpty([])).to.equal(true);
    });
    it("list is not empty", function(){
      expect(genericfunctions.isEmpty(["value"])).to.equal(false);
    });
  });
  describe("padStr function", function(){
    it("padStr under length", function(){
      expect(genericfunctions.padStr("1",4,"0")).to.equal("0001");
    });
    it("padStr over length", function(){
      expect(genericfunctions.padStr("11",1,"0")).to.equal("11");
    });
    it("padStr at length", function(){
      expect(genericfunctions.padStr("1",1,"0")).to.equal("1");
    });
    it("padStr default pad character is 0", function(){
      expect(genericfunctions.padStr("1",2)).to.equal("01");
    });
  });
  describe("SearchListObjects function", function(){
    it("Matching object exists", function(){
      expect(genericfunctions.searchListObjects([{id:1,name:"My Name"},{id:2,name:"The Other Guy"}],{id:1,name:"My Name"})).to.equal(0);
    });
    it("Only Partial property match is false", function(){
      expect(genericfunctions.searchListObjects([{id:1,name:"My Name"},{id:2,name:"The Other Guy"}],{id:1})).to.equal(-1);
    });
    it("Only Partial property match is false", function(){
      expect(genericfunctions.searchListObjects([{id:1,name:"My Name"},{id:2,name:"The Other Guy"}],{id:1,name:"My Name",property:"New value"})).to.equal(-1);
    });
    it("Non object match is false", function(){
      expect(genericfunctions.searchListObjects([{id:1,name:"My Name"},{id:2,name:"The Other Guy"}],{id:3,name:"Shane"})).to.equal(-1);
    });
  });
  describe("inList function", function(){
    it("list is empty", function(){
      expect(genericfunctions.inList("needle",[])).to.equal(false);
    });
    it("needle is not in haystack", function(){
      expect(genericfunctions.inList("needle",["somthing","other","somthingelse"])).to.equal(false);
    });
    it("needle is in haystack", function(){
      expect(genericfunctions.inList("needle",["somthing","needle","somthing"])).to.equal(true);
    });
  });
});