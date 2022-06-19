function sameCase(a, b) {
  if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1;
  } else if ((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())) {
    return 1;
  } else {
    return 0;
  }
}
console.log(sameCase('0', 'k'));

function word(a = '#', b, c) {
  return a + b + c;
}
console.log(word(word.a, 'hello', 'world'));
