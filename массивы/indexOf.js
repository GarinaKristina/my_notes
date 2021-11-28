
// числовой массив
const arr = [0,2,3,4,0,0,7,8,7];

console.log(arr.indexOf(7, 7));// второе число 7, означает 
// "искать нужно с 7 элемента массива.так как у нас несколько семерок". можно вообще не указывать второе число
// и тогда ищет с 0 элемента массива.
if (arr.indexOf(7) !== -1 ) {//  "!== -1 " - " означает ,что "если элемента -1 НЕТ в массиве", а -1 - это знак 
    // отсутствия в массиве - тоесть в итоге минус на минус дает +. и значение превращается "если элемент в массиве ЕСТЬ"
    console.log ('yes,this number here')
}
else {console.log('sorry,but this number we didn`t have in array'); // если условие If не выполняется,то выполняется 
// конструкция else.
}



// string массив
const b = ["0","привет","hello","красавица"];

console.log(b.indexOf("hello"));

if (arr.indexOf("hello") !== -1 ) {
    console.log ('yes,this text here')
}
else {console.log('sorry,but this text we didn`t have in array');
}