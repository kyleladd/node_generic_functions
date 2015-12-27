var remove = function (arr, item) {
  for(var i = arr.length; i--;) {
      if(arr[i] === item) {
          arr.splice(i, 1);
      }
  }
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

var searchListDictionaries = function (list,keyvaluelist){
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
                        return list[i];
                    }
                }
            }
        }
        return null;
    }
    catch(err){
        return null;
    }
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

var convertToInttime = function (time){
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

module.exports = {
  remove: remove,
  searchList: searchList,
  searchListDictionaries: searchListDictionaries,
  convertToBit: convertToBit,
  convertToInttime: convertToInttime,
  rtrim: rtrim,
  toBoolean: toBoolean,
  isInteger:isInteger
};