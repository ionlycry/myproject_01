const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  status = PENDING;
  value = undefined;
  reason = undefined;
  resolve = (value) => {
    if (this.status != PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    this.suc && this.suc(this.value);
  };
  reject = (reason) => {
    if (this.status != PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    this.fai && this.fai(this.reason);
  };
  suc = undefined;
  fai = undefined;
  then(successCallback, failedCallback) {
    if (this.status === FULFILLED) {
      successCallback(this.value);
    } else if (this.status === REJECTED) {
      failedCallback(this.reason);
    } else {
      this.suc = successCallback;
      this.fai = failedCallback;
    }
  }
}

module.exports = MyPromise;
