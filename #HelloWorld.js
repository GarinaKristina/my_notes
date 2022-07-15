function word(a = 'hELlo _____________ world') {
  let wordArray = a.split(' ').filter((str) => str.match(/[a-z]/g));
  console.log(wordArray);
  let wordNew = wordArray
    .map((word) => word.toLowerCase())
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join('');
  let result = '#' + wordNew;
  console.log(result);
}
word();

function words(a) {
  return a
    .split(' ')
    .map((word) => word.toLowerCase())
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join('');
}
words('hello case');

String.prototype.camelCase = function () {
  return this.split(' ')
    .map((word) => word.toLowerCase())
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join('');
};
console.log('tests case'.camelCase());
