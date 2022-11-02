// const map = (array, fn) => {
//   let res = [];
//   for (let value of array) {
//     res.push(fn(value));
//   }
//   return res;
// };
// let arr = [1, 2, 3, 4];
// let res = map(arr, (v) => v * v);
// console.log(res);

const every = (array, fn) => {
  let res = true;
  for (let value of array) {
    res = fn(value);
    if (!res) {
      break;
    }
  }
  return res;
};

let arr = [1, 2, 3];
let res = every(arr, (v) => v < 5);
console.log(res);
