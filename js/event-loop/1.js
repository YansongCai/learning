console.log("start");
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});
new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log("then 1");
  setTimeout(() => {
    console.log("then setTimeout");
  }, 0);
});
new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log("then 2");
});
process.nextTick(() => {
  console.log("nextTick");
});
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
console.log("end");

/*
start
end
nextTick
then 1
then 2
setTimeout 1
setTimeout 2
setImmediate
then setTimeout
*/