function makeFn() {
  let msg = "hello cry";
  return function () {
    console.log(msg);
  };
}
// let cslog = makeFn(); //cslog接收一个函数
// cslog(); //执行一个函数

makeFn()();
