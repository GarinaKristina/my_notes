const a = [0,2,3,4,0,0,7,8,7];

console.table(a);
console.log(a.indexOf(7, 7));

function indexOfEmul(arr, item, from = 0) {// можно from=0 не писать
for (let i= from ; i < arr.length; i++) { // i= from пишем если выше указали from. если нет, то с i=0
    if (arr[i] === item) {
        return i;
    }
}
return -1;
}
console.log(arr.indexOfEmul(a, 7, 7));