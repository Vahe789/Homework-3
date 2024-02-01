// 1) Given an array. Determine whether it consists only from uniques or not.

function checkConsistsUnique(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(checkConsistsUnique([6, 7, 1, 2, 3]));

// 2)  Given an array of numbers. Find the sum of prime numbers.

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function primeSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(primeSum([1, 3, 4, 5, 7, 2]));

// 3) Given an array of integers,
//find the pair of adjacent elements that has the largest product and return that product.

// 4) Given a sorted array and an element from that array.
//Find the index of that element using binary search. (You should research binary
// search)

function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 1));
