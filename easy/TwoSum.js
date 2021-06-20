// Input: nums = [11,2,15,7], target = 9
//  Output: [0,1]
//  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let n = nums.length;
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
