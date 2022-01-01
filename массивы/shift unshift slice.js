// shift 
//удаляет элемент из массива .делает переиндексацию
// удаляет значение с начала массива

const a = [2,3,4,8,7];
const b = a.shift(); // удалили 

console.log(b); // показывает элемент который удалил
console.log(a); // массив уже без первого значения

// unshift добавляет элемент массива в начало массива.
//мы добавили 22
const c = [2,3,4,8,7];
const d = c.unshift(22);

console.log(c); // вывели новый массив
console.log(d);  // количество элементов в массиве

// slice отрубает все из массива, все что было до и после указанного нами индекса

const e = [22,53,34,28,57,5,11,7,9];
const f = e.slice(3, 5); // 3 до какого обрубить и 5 после какого (включительно)

console.log(e);
console.log(f);

////slice можно применять  к строке

let p = 'hello';

console.log(p.slice(1,4));//ell
console.log(p.slice(1));//ello
