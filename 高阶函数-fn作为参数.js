function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

let arr = [1, 3, 4, 7, 8];

// forEach(arr, function (item) {
//   console.log(item);
// });

function filter(array, fn) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}

let results = filter(arr, function (item) {
  return item % 2 === 0;
});
console.log(results);
