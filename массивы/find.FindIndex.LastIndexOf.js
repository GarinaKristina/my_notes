// find
const a = [2,3,4,5,6];
let b = a.find ( item => {
   if (item === 4) {
       return true;
   }
});
console.log(b);// найдет 4

const q = [20,30,44,50,60];
let w = q.find (item =>   {
   if (item >= 33 && item <= 45) {
       return true;
   }
});
console.log(w);// найдет значение,44

const z = [
    {name: "ivan", age: 23 },
    {name: "sergei", age: 13 },
    {name: "hren", age: 18 },
    {name: "alen", age: 46 },
];
let x = z.find (item =>   {
    if (item.age >= 18 && item.age <= 45) {
        return true;
    }
 });
 console.log(x);// нашел объект в массиве с этим показателем

 //findIndex находит индекс объекта
 

 // LastIndexOf находит индекс в строке
  const o = "hello";
  let k = o.lastIndexOf("l");
  console.log(k);//  3