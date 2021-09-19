// var count = 0;
// function show(arr) {
//   console.log(arr);
// }

// function seek(index, n) {
//   if (n >= 0) {
//     if (index[n] < index.length - 1) {
//       //判断是否已回溯到了第一个位置之前，即已经找到了所有位置排列
//       //还有下一个位置可选
//       index[n]++; //选择下一个位置
//       if (
//         (function () {
//           //该匿名函数判断该位置是否已经被选择过
//           for (var i = 0; i < n; i++) if (index[i] == index[n]) return true; //已选择
//           return false; //未选择
//         })()
//       ) {
//         return seek(index, n);
//         //重新找位置
//       } else {
//         return true; //找到
//       }
//     } else {
//       //当前无位置可选，进行递归回溯
//       index[n] = -1; //取消当前位置
//       if (seek(index, n - 1)) {
//         //继续找上一个位置
//         return seek(index, n);
//         //重新找当前位置
//       } else {
//         return false; //已无位置可选
//       }
//     }
//   } else {
//     return false;
//   }
// }

// function perm(arr) {
//   var index = new Array(arr.length);
//   for (var i = 0; i < index.length; i++) {
//     index[i] = -1; //初始化所有位置为-1，以便++后为0
//   }
//   for (i = 0; i < index.length - 1; i++) {
//     seek(index, i); //先搜索前n-1个位置
//   }
//   while (seek(index, index.length - 1)) {
//     //不断搜索第n个位置，即找到所有位置排列
//     var temp = [];
//     for (
//       i = 0;
//       i < index.length;
//       i++ //将位置之转换为元素
//     ) {
//       temp.push(arr[index[i]]);
//     }
//     show(temp);
//   }
// }

// perm(["1", "2", "3"]);

function swap(arr, i, j) {
  if (i != j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function perm(arr) {
  (function fn(n) {
    //为第n个位置选择元素
    for (var i = n; i < arr.length; i++) {
      swap(arr, i, n);
      // 判断数组中剩余的待全排列的元素是否大于1个
      if (n + 1 < arr.length - 1) {
        // 从第n+1个下标进行全排列
        fn(n + 1);
      } else {
        console.log(arr); // 显示一组结果
      }
      console.log("arr", arr);
      // 还原当前的替换
      swap(arr, i, n);
    }
  })(0);
}
// perm(["1", "2", "3"]);

function getAllList(arr) {
  function getChildList(n) {
    for (let i = n; i < arr.length; i++) {
      swap(arr, i, n);
      if (n + 1 < arr.length - 1) {
        getChildList(n + 1);
      } else {
        console.log(arr);
      }
      swap(arr, i, n);
    }
  }
  getChildList(0);
}

getAllList(["1", "2", "3"]);

/*

n i 123
0 0 123
  -> 1 1 123 log
     1 2 132 log
0 1 213
  -> 1 1 213 log
     1 2 231 log
0 2 321

*/
