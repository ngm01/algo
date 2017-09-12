
// Coding Dojo Algorithm Challenges
// Chapter 7 --  Arrays, Part II (pp. 80-85)

// 9/11/2017
// Balance Index
// Doesn't work :(
function findBalanceIndex(arr){
  var sum = arr[0];
  var sum2 = 0;
  
  for (var i=1; i<arr.length; i++){
    for (var k=1; k < i; k++){
      sum += arr[k];
    }
    for (var m = i +1; k < arr.length; m++){
      sum2 = arr[m];
    }
    console.log(i, k, m);
    if(sum == sum2){
      return i;
    }
  }
  return -1;
}

// var test = [-2, 5, 7, 0, 1, 2];
// console.log(findBalanceIndex(test));

// 9/12/2017
// Binary search v. 1.5
import Math;
function binarySearch(arr, val){
  var mid = Math.floor(arr.length/2);
  var start = 0;
  var end = arr.length - 1;
  while(start != end){
    if(arr[mid] === val || arr[mid + 1] === val || arr[mid - 1] === val){
      return true;
    }
    else{
      if(val > arr[mid]){
        start = mid;
        mid = Math.floor(((start + end)/2) + 1);
      }
      else if(val < arr[mid]){
        end = mid;
        mid = Math.floor(end/2);
      }
    }
  }
  return false;
}

var arr1 = [1, 2, 300, 505, 600, 999];
console.log(binarySearch(arr1, -1));