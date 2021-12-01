//concat соединяет массивы  в новый массив
const a = [2,3,4,8,7];
const b = [-2,1,8,-7,25];
const a2 = [44,45,46,47]
const c = a.concat(b); // указываем с какого масива будет начинаться.concat(наименование второго массива)
//console.log(c);
//console.table(c);


const e = b.concat(b); //продублировали массив b
console.log(b.concat(b)); // можно сразу вывести так
//console.table(e);

const h = a.concat(b, a2); // через запятую можно перечислять очередность массивов
console.log(h);

// concat в string

let  q = "hello";
let w = "hi";
let z = q.concat(w);
console.log(z);
