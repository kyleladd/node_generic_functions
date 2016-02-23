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

var searchListDictionaries = function (list,keyvaluelist,bool_index){
    var bool_index = typeof bool_index !== 'undefined' ?  bool_index : false;
    try{
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
                        if(bool_index){return i;}
                        else{return list[i];}
                    }
                }
            }
        }
        if(bool_index){return -1;}else{return null;}
    }
    catch(err){
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
    // console.log(data.toString());
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

module.exports = {
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
  isEmpty:isEmpty
};