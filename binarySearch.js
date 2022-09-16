const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // must be ordered

// Basic linear search

const linearSearch = (val, arr) => {
  let linearSearchCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      console.log(`The search finished in ${i} iterations`);
      return i;
    }
    linearSearchCounter = i;
  }
  console.log(`The search finished in ${linearSearchCounter + 1} iterations`);
  return -1;
};

// Basic linear test
// console.log(linearSearch(15, data));

// ############################################################################

// Binary Search Algorithm - iterative

let binarySearchCounter = 0;

const binarySearch = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    binarySearchCounter += 1;
    const middle = lower + Math.floor((upper - lower) / 2);

    if (val === arr[middle]) {
      console.log(`The search finished in ${binarySearchCounter} iterations`);
      return middle;
    }

    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  console.log(`The search finished in ${binarySearchCounter} iterations`);
  return -1;
};

// Binary Search Test
console.log(binarySearch(11, data));

// ############################################################################

// Binary Search Algorithm - recursive

let binaryCounter = 0;

const recursiveBinarySearch = (target, arr) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    console.log(`The binary search finished in ${binaryCounter} iterations`);
    return middleIndex;
  }
  binaryCounter += 1;
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

console.log(recursiveBinarySearch(6, data));
