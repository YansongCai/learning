/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = s.length;
  if (len < 2) {
    return len;
  }

  let res = '';
  let m = 0;
  for (let i = 0; i < len; i++) {
    let index = res.indexOf(s[i]);
    if (index !== -1) {
      // 遇见了重复的元素就说明当前不重复字串已经结束。
      // 删除 [0, 重复元素] ;// 把包含重复元素及之前的元素删除
      res = res.substring(index + 1);
    }
    res += s[i];
    m = Math.max(res.length, m);
  }
  return m;

  // let arr = [];
  // let m = 0;
  // for (let i = 0; i < len; i++) {
  //     let index = arr.indexOf(s[i]);
  //     if (index !== -1) {
  //         // 遇见了重复的元素就说明当前不重复字串已经结束。
  //         // 删除 [0, 重复元素] ;// 把包含重复元素及之前的元素删除
  //         arr.splice(0, index + 1);
  //     }
  //     arr.push(s[i]);
  //     m = Math.max(arr.length, m);
  // }
  // return m;

  // var res = '';
  // var maxLen = 0;
  // for (var i = 0; i < len; i++) {
  //   var count = i;
  //   while (count < len && res.indexOf(s[count]) < 0) {
  //     res += s[count] || '';
  //     count++;
  //   }
  //   // 跳过重复的字符
  //   if (s[count - 1] === s[count]) {
  //     i = count - 1 > 0 ? count - 1 : i;
  //   }
  //   maxLen = Math.max(maxLen, res.length);
  //   res = '';
  // }
  // return maxLen;

  // var res = '';
  // var maxLen = 0;
  // for (var i = 0; i < len; i++) {
  //   var count = i;
  //   while (count < len && res.indexOf(s[count]) < 0) {
  //     res += s[count] || '';
  //     count++;
  //   }
  //   maxLen = Math.max(maxLen, res.length);
  //   res = '';
  // }
  // return maxLen;

  // var res = '';
  // var maxLen = 0;
  // var head = 0;
  // for (var i = 0; i < len; i++) {
  //     if (res.indexOf(s[i]) < 0) {
  //         res += s[i];
  //         maxLen = Math.max(maxLen, res.length);
  //     } else {
  //         res = '';
  //         i = head;
  //         head = i + 1;
  //     }
  // }
  // return maxLen;
};

console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('aab')); // 2
console.log(lengthOfLongestSubstring("dvdf")); // 3