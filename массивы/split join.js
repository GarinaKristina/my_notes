// split делает массив из строки
let str = 'hello';

let newStr =str.split(); // если поставить ковычки без пробела(""), то разделит каждый символ на элемент.

console.log(newStr);

let abc = 'hello my little world';

let newabc =abc.split( ); // если поставить ковычки с пробелом (" "), то разделит каждый символ на элемент.

console.log(newabc);

let abcd = 'hello, my, little, world';

let newabcd =abcd.split(','); // если поставить ковычки  (","), то разделит каждый символ на элемент.

console.log(newabcd);


// join из массива делает строку

let call = ['a', 'cat', 'b', 'fish'];

let an = call.join();// если разделение отсутств. то будет строка через запятую
// ("") - то все элементы массива будут один словом
//("-") - то все элементы массива будут через -
//(" ")- через пробел,то все элементы через пробел

console.log(an);
