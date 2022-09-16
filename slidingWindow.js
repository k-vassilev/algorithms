const maxSubArraySum = (arr, size) => {
  if (size < 0 || size > arr.length) return null;
  let currSum = 0;
  let maxSumSeen = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= arr[i - (size - 1)];
    }
  }
  return maxSumSeen;
};

const arr = [1, 2, 3, 5, 4, 8, 6, 2];

console.log(maxSubArraySum(arr, 5));
