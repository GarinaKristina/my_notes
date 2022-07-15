function abc(a) {
  let newArr = Array.from(new Set(a)).join('n');
  // let arr = [new Set(newArr)];
  //   let b = Object.keys(arr);
  console.log(newArr);
  //   console.log(arr);
  //   console.log(b);
}
abc('Hiiiiiiiiimyyyyyydeaaaar!');
const arr = [
  {
    name: 'John',

    age: 32,

    sex: 'm',
  },

  {
    name: 'Ann',

    age: 27,

    sex: 'f',
  },

  {
    name: 'Boris',

    age: 52,

    sex: 'm',
  },
];
arr[0]['sex'] = 'male';
console.log(`Hi my name is ${arr[0]['name']}, I am ${arr[0]['age']} years old, and I am ${arr[0]['sex']}`);

for (let abc of arr) {
  console.log('Hi my name is', abc.name, 'I am', abc.age, 'years old, and I am', abc.sex);
}
function abc(arr) {
  let a = arr.map((str) => {
    console.log('Hi my name is', str.name, 'I am', str.age, 'years old, and I am', str.sex);
  });
}
abc(arr);
let a = arr.map((str) => {
  return 'Hi my name is', str.name, 'I am', str.age, 'years old, and I am', str.sex;
});
console.log(a);

const strArr = arr.map(
  (person) =>
    `Hi, my name is ${person.name}, I am ${person.age} years old and I am ${person.sex === 'f' ? 'female' : 'male'}`
);
console.log(strArr);
