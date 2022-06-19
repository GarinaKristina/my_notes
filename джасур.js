function word(a) {
  let array = a.split(' ').filter((str) => str.match(/[a-z]/g));
  console.log(array);
  let newWord = array
    .map((str) => str.toLowerCase())
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join('');
  let result = '#' + newWord;
  console.log(result);
}
word('i lOVE javascript');
