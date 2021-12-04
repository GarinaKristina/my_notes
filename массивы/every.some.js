const a = [4,5,6,7,8];
//every проверяет прописанное условие для каждого элемента массива 
// если все ОК,то возвращет true. Если хоть одно условие не соответствует,то результат false.
let b = a.every(item => {
 if(item >3) { // все элементы больше 3,поэтому true
    // (item >0 && item <20) тут условие > 0 и <20
     return true;
 }
});
console.log (b);

//пример подходит ли группа для экскурсий. все ли в группе старше 16 лет
const d = [
    {name: "ivan", age: 23 },
    {name: "sergei", age: 13 },
];

let f = d.every(item => {
    if(item.age > 16) { 
       
        return true;
    }
   });
   console.log (f);

   // some- проверяет,есть ли хоть 1 элемент массива,что соответствует условиям
   const q = [
    {name: "ivan", age: 23 },
    {name: "sergei", age: 13 },
];

let w = q.some(item => {
    if(item.age > 16) { 
       
        return true;
    }
   });
   console.log (w);