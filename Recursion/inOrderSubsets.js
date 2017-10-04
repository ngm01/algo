// Coding Dojo Algorithm Challenges
// Chapter 9: Recursion (pp 96 - 106)
// In-Order Subsets (p 101) 9/29/17
// strSubsets("abc") => ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

function strSubsets(str){
  var subsArr = [""];
  if(str.length === 0){
    return subsArr;
  }
  if(str.length == 1){
    subsArr.push(str);
    return subsArr;
  }
  var pos = 0;
  while(pos < str.length){
    rStrSubsets(str, pos, "", subsArr)
    pos++;
  }
  return subsArr;
}

function rStrSubsets(str, pos, subStr, subsArr){
  subStr += str[pos];
  subsArr.push(subStr);
  while(pos < str.length - 1){
    rStrSubsets(str, pos + 1, subStr, subsArr)
    pos++;
  }
  
}

var sub = strSubsets('abc');
console.log(sub);