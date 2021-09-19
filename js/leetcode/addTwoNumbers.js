/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var len = Math.max(l1.length, l2.length);
  var res = [];
  for (var i = 0; i < len; i++) {
    var n1 = l1[i] || 0;
    var n2 = l2[i] || 0;
    if ((n1 + n2) < 10) {
      res[i] = (res[i] || 0) + n1 + n2;
    } else {
      res[i] = n1 + n2 - 10;
      res[i + 1] = 1;
    }
  }
  return res;

  // var l1Num = l1.reverse().join('') * 1;
  // var l2Num = l2.reverse().join('') * 1;
  // var resultNum = l1Num + l2Num;
  // return resultNum.toString().split('').reverse();
};

var l1 = [2, 4, 3, 1], l2 = [5, 6, 4];
addTwoNumbers(l1, l2);