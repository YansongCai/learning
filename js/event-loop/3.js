async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}
console.log(3);

async function async2() {
  console.log(4);
}

setTimeout(() => {
  console.log(5);
}, 0);

async1();

new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
});

// console.log(8);

// 推断：3 1 6 8 4 2 7 5
// 答案： 3 1 4 6 8 2 7 5
/*
async2 中 4 因为不是在 await 之后，所以是同步代码，在 1 之后立即执行。
*/
// async 转为 promise
function async1() {
  return new Promise((resolve) => {
    console.log(1);
    async2();
    resolve();
  }).then(() => {
    console.log(2);
  });
}
console.log(3);

function async2() {
  return new Promise((resolve) => {
    console.log(4);
    resolve();
  });
}

setTimeout(() => {
  console.log(5);
}, 0);

async1();

new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
});

console.log(8);
