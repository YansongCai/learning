setTimeout(() => {
  console.log(1);
}, 20);

console.log(2);

setTimeout(() => {
  console.log(3);
}, 10);

console.log(4);
const statTime = Date.now();
console.log('for start');
for (let i = 0; i < 900000000; i++) {
  
}
console.log('for end', Date.now() - statTime);
console.log(5);

setTimeout(() => {
  console.log(6);
}, 20);

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

/*
2
4
for start
for end 701
5
7

// 因为前面的代码执行远超 20ms 所以此时定时器（宏任务）都处于待调用栈调用的状态，调用栈一清空立马按顺序执行宏任务队列的任务（此代码中无微任务，忽略微任务队列）。
// 宏任务队列顺序根据代码顺序和定时器时间顺序来。
3
1
8
6
*/