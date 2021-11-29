// filter получаем новый массив, который содержит элементы старого массива,прошедший через условия filter.

//пример 1.Создаем новый массив с должниками больше 10( debt)
const client = [
    { "iin": "jdjgjb", "user": "Ivanov","debt": 4 },
    { "iin": "j5d5d4d", "user": "Petrov","debt": 0 },
    { "iin": "jjjjj85", "user": "Sidarov","debt": 14 },

];

let debts = client
.filter(item => (item.debt >= 10)) // отфильтровали значение больше 10
.sort((a, b) => (b.debt - a.debt)); // вывели сортировку от большего к меньшего 
console.log(debts)

//пример 2. Создаем новый массив с элементами больше 5

const a = [1,2,3,6,66,7,2,8,9,10,21,25];
let b = a.filter(item => {
 if(item > 5)  
 return true;// здесь только либо true либо false
});
console.log(b);