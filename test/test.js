var expect = require("expect.js");
var config = require("../config.json"); // the real config

function clone(obj) {
  if(obj == null || typeof(obj) != 'object')
    return obj;

  var temp = obj.constructor();

  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      temp[key] = clone(obj[key]);
    }
   }
  return temp;
}

// TODO: add more tests!

describe("DataGetter", function(){
  describe("#init", function(){
    it("should return and object", function(){
      var conf = clone(config);
      conf.wakefile = "./test/testWakefiles/wakefile1.json";
      var dg = require("../lib/dataGetter.js")(conf, false);
    });
  });
});
