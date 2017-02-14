module.exports = function (str){
 if (str === ''){
    return null
  }
var reverseValue ='';
for ( var i = str.length - 1; i >= 0;i--){
  reverseValue += str[i]
}
if (reverseValue === str){
  return true
}
return reverseValue
}
