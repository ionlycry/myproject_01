const MyPromise = require("./MyPromise");
let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 2000);

  //   reject("失败");
});
promise.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
