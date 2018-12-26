(function (root, factory) {
    //http://ifandelse.com/its-not-hard-making-your-library-support-amd-and-commonjs/
  if(typeof define === "function" && define.amd) {
    define([""], function(){
      return (root.node_generic_functions = factory());
    });
  } else if(typeof module === "object" && module.exports) {
    module.exports = (root.node_generic_functions = factory());
  } else {
    root.node_generic_functions = factory();
  }
}(this, function(node_generic_functions) {

    var remove = function (arr, item) {
      for(var i = arr.length - 1; i >= 0; i--) {
          if(arr[i] === item) {
              arr.splice(i, 1);
          }
      }
      return arr;
    }

    var searchList = function (list,key,value,returnkeyv){
        try{
            for(var i = 0; i < list.length; i++){
                if(list[i][key] == value){
                    return list[i][returnkeyv];
                }
            }
            return null;
        }
        catch(err){
            return null;
        }
    }

    var searchListDictionaries = function (list,keyvaluelist,bool_index,makelist){
        var bool_index = typeof bool_index !== 'undefined' ?  Boolean(bool_index) : false;
        var makelist = typeof makelist !== 'undefined' ?  Boolean(makelist) : false;
        try{
            var list_of_matches = [];
            var numcriterion = 0;
            for (var key in keyvaluelist) {
                numcriterion++;
            }
            for(var i = 0; i < list.length; i++){
                var counter = 0;
                for (var key in keyvaluelist) {
                    if(list[i][key] == keyvaluelist[key]){
                        counter++;
                        if(counter == numcriterion){
                            if(makelist){
                                if(bool_index){list_of_matches.push(i);}
                                else{list_of_matches.push(list[i]);}
                            }
                            else{
                                if(bool_index){return i;}
                                else{return list[i];}
                            }
                        }
                    }
                }
            }
            if(makelist){return list_of_matches;}
            if(bool_index){return -1;}else{return null;}
        }
        catch(err){
            if(makelist){return [];}
            if(bool_index){return -1;}else{return null;}
        }
    }
    var searchListObjects = function (list,comp_object){
        try{
            for(var i = 0; i < list.length; i++){
                if(JSON.stringify(list[i]) == JSON.stringify(comp_object)){
                    return i;
                }
            }
            return -1;
        }
        catch(err){
            return -1;
        }
    }

    var inList = function (needle, haystack) 
    {
        var i = haystack.length;
        while (i--) {
            if (haystack[i] === needle) return true;
        }
        return false;
    }

    var padStr = function(str,padToLength,character){
        character = typeof character !== 'undefined' ? character : "0";
        while (str.toString().length < padToLength) {
            str = character + str;
        }
        return str;
    }

    var convertToBit = function (value){
        try{
            if((value.length > 0 && value != 0 && value != false && value != 'false') || value === true || value == 1){
                return 1;
            }
            return 0;
        }
        catch(err){
            return 0;
        }
    }

    var convertToInttime  = function (time){
        var numtime = 0;
        time = time.replace(/ /g,"");
        time = time.replace(/\./g,"");
        time = time.replace(/\:/g,"");
        time = time.toLowerCase();
        if(time.indexOf('am') > -1) {
            time = time.replace("am","");
            if(parseInt(time)>1159){
                //print'Time is between 12 and 1 am';
                numtime = parseInt(time)-1200;
            }
            else{
                numtime = parseInt(time);
            }
        }
        else if(time.indexOf('pm') > -1) {
            time = time.replace("pm","");
            if(parseInt(time)<1200){
                numtime = parseInt(time)+1200;
            }
            else{
                numtime = parseInt(time);
            }
        }
        else{
            numtime = parseInt(time);
        }
        if(isNaN(numtime)){
            return 0;
        }
        return numtime;
    }

    var convertIntToStrTime = function (numtime){
        var string_time = "";
        if(isNaN(numtime)){
            numtime = 0;
        }
        if(numtime>2359){
            numtime = 2359;
        }
        if(numtime > 1159){
            string_time = string_time + "pm"
        }
        else{
            string_time = string_time + "am"
        }
        if(numtime > 1259){
            numtime = numtime-1200;
        }
        if(numtime < 100){
            numtime = numtime+1200;
        }
        var strtime = numtime.toString();
        string_time = [strtime.slice(0, strtime.length-2), ":", strtime.slice(strtime.length-2)].join('') + string_time;
        return string_time;
    }

    var rtrim = function (str, ch)
    {
        for (i = str.length - 1; i >= 0; i--)
        {
            if (ch != str.charAt(i))
            {
                str = str.substring(0, i + 1);
                break;
            }
        } 
        return str;
    }

    var toBoolean = function(value){
        if(value === true || value === "true"){
            return true;
        }
        return false;
    }

    var isInteger = function  (data){
        // console.log(new RegExp("^-?[0-9]+$").test(data.toString()));
      return (typeof data === 'number' && (data % 1) === 0);
    }

    var isEmpty = function(object) {
      for(var key in object) {
        if(object.hasOwnProperty(key)){
          return false;
        }
      }
      return true;
    }

    var alphaNumericSort = function(a,b){
        var reA = /[^a-zA-Z]/g;
        var reN = /[^0-9]/g;
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if(aA === bA) {
            var aN = parseInt(a.replace(reN, ""), 10);
            var bN = parseInt(b.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        }
        else {
            return aA > bA ? 1 : -1;
        }
    }
    // If string (haystack) Starts with string (needle)
    var startsWith = function(needle,haystack) {
        try{
            return haystack.indexOf(needle, 0) === 0;
        }
        catch(err){
            return false;
        }
    };

    // If string (haystack) Ends width (needle)
    var endsWith = function(needle,haystack) {
        try{
            return haystack.indexOf(needle, haystack.length - needle.length) !== -1;
        }
        catch(err){
            return false;
        }
    };
    /**
    * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
    * @param obj1
    * @param obj2
    * @returns obj3 a new object based on obj1 and obj2
    */
    var merge_options = function(obj1,obj2){
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attributename in obj2) { obj3[attributename] = obj2[attributename]; }
        return obj3;
    };

    var arraysEqual = function(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }
        return true;
    };
    var arrayContainsAnotherArray = function(needle, haystack){
        for(var h = 0; h < haystack.length; h++){
            if(arraysEqual(needle,haystack[h]))
            {
                return true;
            }
        }
        return false;
    };

    var node_generic_functions = {
      remove: remove,
      searchList: searchList,
      searchListDictionaries: searchListDictionaries,
      searchListObjects: searchListObjects,
      inList:inList,
      padStr:padStr,
      convertToBit: convertToBit,
      convertToInttime : convertToInttime ,
      convertIntToStrTime:convertIntToStrTime,
      rtrim: rtrim,
      toBoolean: toBoolean,
      isInteger:isInteger,
      isEmpty:isEmpty,
      alphaNumericSort:alphaNumericSort,
      startsWith:startsWith,
      endsWith:endsWith,
      merge_options: merge_options,
      arraysEqual: arraysEqual,
      arrayContainsAnotherArray: arrayContainsAnotherArray
    };
  return node_generic_functions;
}));