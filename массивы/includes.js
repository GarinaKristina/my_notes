// includes определяет, содержит ли массив 
//определённый элемент, возвращая в зависимости от этого true или false.
const trance = ['2d24f', 'df4f', 'kdo54'];
const a = [77, 88, 2 , 7 ,99 , 2];

if (a.includes (77)) {   // если напишем (77, 2) то будет искать с второго индекса значение 77
    console.log("yes");
}
else {
console.log("no!");
}

let users = [
    { "name": "ivanov", "age": 44 },
    { "name": "evseeva", "age": 18 },
    { "name": "garin", "age": 33 },
    { "name": "garina", "age": 18 },
]
let newUsers = users.filter(item => {
    return item.name.includes('ar')
});

console.log(newUsers);
