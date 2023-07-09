function twoSum(nums: number[], target: number): number[] {
  const hashtable: any = {};

  for (let i = 0; i < nums.length; i++) {
    const diff: number = target - nums[i];
    if (hashtable.hasOwnProperty(diff)) {
      return [hashtable[diff], i];
    } else {
      hashtable[nums[i]] = i;
    }
  }

  return [];
}

console.log(twoSum([7, 11, 15, 17, 18, 19, 20, 2], 9));
