function persistence(num) {
  let a = num.toString();
  if (a.length === 1) {
    return 0;
  }
  let b = a.split('').reduce((a, b) => a * b, 1);
  return 1 + persistence(b);
}
console.log(persistence(999));
