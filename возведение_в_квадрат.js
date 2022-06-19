function square(a, b) {
  let firstParametr = Math.pow(a, a) + '';
  let secondParametr = Math.pow(b, b) + '';
  let result = firstParametr + secondParametr;
  return result;
}
console.log(square(4, 4));

function num(a) {
  let aParametr = (a + '').split('');
  let count = Number(aParametr.map((str) => Math.pow(str, 2)).join(''));
  return count;
}
console.log(num(9119));
