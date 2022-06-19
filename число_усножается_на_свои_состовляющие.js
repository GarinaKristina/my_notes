// function persistence(num) {
//   let a = num.toString().length;
//   console.log(a);
// }
// persistence(999);
function hello(a) {
  console.log('Hi', a);
}

let person = {
  name: 'Vadim',
  age: 5,
  grettinggs: hello(this.name),
};
hello(person.name);
