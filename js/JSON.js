var obj = { a: 1, time: new Date(), child: { a: 1, time: new Date() } };
JSON.stringify(obj, function (key, val) {
  console.log("_this", key, "val", val);
  return val;
});
