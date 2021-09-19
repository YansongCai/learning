/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var len = nums.length;
  var map = new Map();
  for (var i = 0; i < len; i++) {
    var remainder = target - nums[i];
    if (map.has(remainder)) {
      // 因为当前项是后面的，余数在前（已经在map中），所以i应该放在后面
      return [map.get(remainder), i];
    } else {
      map.set(nums[i], i)
    }
  };

  // var len = nums.length;
  // var map = new Map();
  // for (var i = 0; i < len; i++) {
  //     map.set(nums[i], i)
  // };
  // for (var i = 0; i < len; i++) {
  //     var remainder = target - nums[i];
  //     if (map.has(remainder)) {
  //         return [i, map.get(remainder)];
  //     }
  // };

  // var len = nums.length;
  // var map = {};
  // for (var i = 0; i < len; i++) {
  //     map[nums[i]] = '' + i;
  // };
  // for (var i = 0; i < len; i++) {
  //     var remainder = target - nums[i];
  //     if (map[remainder]) {
  //         return [i, parseInt(map[remainder])];
  //     }
  // };

  // var len = nums.length;
  // for (var i = 0; i < len; i++) {
  //     for (var j = 1; j < len; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j];
  //         }
  //     }
  // }

  // var len = nums.length;
  // for (var i = 0; i < len; i++) {
  //     var remainder = target - nums[i];
  //     var index = nums.indexOf(remainder);
  //     if (index > 0) {
  //         return [i, index];
  //     }
  // };
};

// nums = [2,7,11,15], target = 9
nums = [3, 2, 4], target = 6
twoSum(nums, target);
