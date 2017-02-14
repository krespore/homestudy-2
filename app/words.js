module.exports = function (str) {
    var matches = str.match(/\S+/g);
    var obj = {};
    for(var i = 0; i < matches.length; i+=1){
      
      if (isNaN(obj[matches[i]])){
        obj[matches[i]] = 1
      }else {
        obj[matches[i]] += 1;
        console.log(obj[matches[i]]);
      }
    }
    return obj
}