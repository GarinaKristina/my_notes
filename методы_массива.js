const arr = ['1', 7, 3, 4, 5, 6];

let abc = arr.indexOf(3, 0); // возвращает индекс найденного элемента
console.log('', abc);
//includes - возвращает true/false
let a = arr.find((str) => str > 3); // возвращает первый найденный элемент в массиве
console.log('Я нашел первый подходящий элемент и он равен -', a);

let b = arr.filter((str) => str > 3);
console.log('Применил фильтр к массиву и получилось', b);

let c = arr.map((str) => str * 3);
console.log('Преобразовал весь массив', c);

let d = arr.sort();
console.log('Сделал сортировку и он автоматически положил элементы так -', d);

let v = d.reverse();
console.log('Сделал все наоборот', v);

let m = d.reduce((a, b) => a + b);
console.log('Сумма всех элементов равна', m);

let q = arr.concat('m');
console.log('Добавил новый элемент в конец', q);
console.log(arr);

//null - explicity assigned a variable
//hoisting - moves all declararation to the top of the scope
//closure- gives access to the otutside function from inner function
//deploy-automaticly
