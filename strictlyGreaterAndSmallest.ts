var countElements = function (nums: number[]): number {
  let count: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    let smallerFound: boolean = false;
    let greaterFound: boolean = false;
    for (let j: number = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) smallerFound = true;
      else if (nums[i] < nums[j]) greaterFound = true;
      if (smallerFound && greaterFound) break;
    }
    if (smallerFound && greaterFound) count++;
  }
  return count;
};
