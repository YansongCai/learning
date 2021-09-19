console.log("start");
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log("then 1");
  setTimeout(() => {
    console.log("then setTimeout");
  }, 0);
});
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
console.log("end");

/*
start
end
then 1
setTimeout 1
setTimeout 2
then setTimeout
*/