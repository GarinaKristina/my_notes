// trim()  способ убрать пробелы в начале и в конце .
//toLocaleLowerCase() преобразовывает в нижний регистр (маленькие буквы)
//toLocaleUpperCase() преобразовывает в верхний регистр) (большие буквы)
let z = [
    { "name": "  zahra    " },
    { "name": "  Sergei    " },
    { "name": "  ziNa" },
];

const zBack = z.map(item => {
item.name = item.name.trim().toLocaleLowerCase();// trim убираем пробелы в 'name'
// toLocaleLowerCase преобразовывает в нижний регистр (маленькие буквы)
return item; // возвращаем новые item 
});

console.log(zBack);
