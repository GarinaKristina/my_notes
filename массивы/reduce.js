// reduce. Складываем элементы массива при условии
const a = [-2,1,8,-7,25];// если первый лемент массива отрицательное число, то первый
// элемент в reduse залитает с минусом и результат меняется
let b = a.reduce( (accum, item ) =>  {
    if (item > 0) {
        accum += item; // можно отнять -=
    }
    return accum;
}, 0);// если первый элемент с минусом, то пишем здесь 0 и результат будет верным

console.log(b);

const c = [-2,1,8,-7,25];// как узнать самое большое число в массиве

let d = c.reduce( (accum, item ) =>  {
    if (item > accum) { //если ставим знак < ,то выводит наименьшее значение в массиве
        accum = item; 
    }
    return accum;
});
console.log(d);


/// поработаем с массивом

let e = [
    { "id" : 35, "city" : "moskov"},
    { "id" : 25, "city" : "kaluga"},
    { "id" : 75, "city" : "mogilev"},
    { "id" : 115, "city" : "vilnius"},
];
// создаем новый массив с элементами из показателей ID
let f = e.reduce((accum, item ) =>  {
    accum.push(item.id);
    return accum;
}, []);
console.log(f);
console.log(Array.isArray(f)); // показывает true или false массив это или нет