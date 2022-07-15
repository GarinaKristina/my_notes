const obj = [
  {
    name: 'abc',
    id: 0,
  },
  {
    name: 'bac',
    id: 1,
  },
  {
    name: 'bca',
    id: 2,
  },
];
// let arr = obj.map((str) => str.name);
// console.log(arr);
// arr: [ 'abc', 'bac', 'bca' ]
const arr = obj.map((elem) => Object.entries(elem));
const newArr = [];
arr.forEach((array) => {
  newArr.push({
    firstName: array[0][1],
    id: array[1][1],
  });
});
console.log(newArr[0]);
