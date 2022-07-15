function isPalindrome(x) {
  let str = String(x.toLowerCase().split(''));
  let str2 = x.toLowerCase().split('').reverse() + '';
  let result = str == str2;
  console.log(result);
  console.log(str);
  console.log(str2);
}
isPalindrome('Abhuba');
