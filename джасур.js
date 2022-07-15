function generateHashtag(str) {
  if (str.trim() === '') return false;
  let a = str.split('');
  let b = a.filter((str) => str.match(/[a-z]/g));
  if (b > 140) {
    return false;
  }
  if (str !== '') {
    return (
      '#' +
      str
        .split(' ')
        .filter(Boolean)
        .map((element) => {
          return element.charAt(0).toUpperCase() + element.slice(1);
        })
        .join('')
    );
  } else {
    return false;
  }
}

console.log(
  generateHashtag(
    '    Hello                                                                                                                                             World   '
  )
);
function basicOp(operation, value1, value2) {
  if (operation == '-') {
    return value1 - value2;
  }
  if (operation == '+') {
    return value1 + value2;
  }
  if (operation == '*') {
    return value1 * value2;
  }
  if (operation == '/') {
    return value1 / value2;
  }
}
console.log(basicOp('+', 2, 1));

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

function countPositivesSumNegatives(input) {
  if (input === null || input == 0) {
    return [];
  } else {
    let countPositives = input.filter((e) => e > 0);
    let sumNegatives = input
      .filter((e) => e < 0)
      .reduce((a, b) => {
        return a + b;
      });

    let newArray = [countPositives.length, sumNegatives];
    return newArray;
  }
  console.log(newArray);
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
function sumTwoSmallestNumbers(numbers) {
  let a = numbers.sort((a, b) => a - b);
  let result = a[0] + a[1];
  return result;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
