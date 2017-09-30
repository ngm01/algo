
// Coding Dojo Algorithm Challenges
// Chapter 7 --  Arrays, Part II (pp. 80-85)

// 9/11/2017
// Balance Index
// Doesn't work :(

// A) what is this trying to do?
// "Return the balance index where sums are equal on either side (excluding it's own value).
// Return -1 if none exist.
// E.g. findBalanceIndex([-2, 5, 7, 0, 3]) => 2
// findBalanceIndex([9,9]) => -1
// B) T-diagram it. Why does it get stuck in a loop?

// 9/30/2017: fixed. Doing algos at 6 PM on a Saturday night. What is my life.
function findBalanceIndex(arr){
  
  for (var i=1; i<arr.length - 1; i++){
    var leftSum = 0;
    var rightSum = 0;
    for (var k=i-1; k >= 0; k--){
      leftSum += arr[k];
    }
    for (var m = i +1; m < arr.length; m++){
      rightSum += arr[m];
    }
    console.log("leftSum: " + leftSum);
    console.log("rightSum: " + rightSum);
    if(leftSum == rightSum){
      return i;
    }
  }
  return -1;
}

//console.log(findBalanceIndex([-1, 7, 55, -53, -3]));

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