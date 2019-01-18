var perm = function(str){
  var results = [];
  var arr = str.split("");
  var len = Math.pow(arr.length, 2);

  for( var i = 0; i < len; i++ ){
    let j = i
    console.log('setting j', j.toString(2))
    for( var k= 0; k < arr.length; k++){
      console.log('j', j.toString(2))
      arr[k] = ( j & 1 ) ? arr[k].toUpperCase() : arr[k].toLowerCase();
      j >>= 1
    }
    var combo = arr.join("");
    results.push(combo);
  }
  return results;
}

console.log(perm('hi'))
