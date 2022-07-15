function num(a) {
  let b = a.split('').reverse();
  b[1] = b[1] + '0';
  b[2] = b[2] + '00';
  let c = b.reverse();
  return c;
}
// console.log(num('982'));

function getSum(a, b) {
  if (a === b) {
    return a;
  } else if (a !== b) {
    return a + b;
  } else if (a == 0) {
    return b;
  } else if (b == 0) {
    return a;
  }
}
console.log(getSum(1, 1));

// function parseFeatureElement(featureElement) {
//   const featureElementArr = featureElement.split(' > ');
//   console.log(featureElementArr);
//   const page = featureElementArr[0];
//   console.log(page);
//   const pageProperty = featureElementArr[1]
//     .split(' ')
//     .map((text, i) => {
//       return i === 0 ? text.toLowerCase() : text.charAt(0).toUpperCase() + text.slice(1);
//     })
//     .join('');
//   console.log(pageProperty);
//   const pages = new PageFactory();
//   if (featureElementArr.length > 2) {
//     const selectorText = featureElementArr[featureElementArr.length - 1];
//     return pages[`${page}`][`${pageProperty}`](selectorText);
//   }
//   return pages[`${page}`][`${pageProperty}`];
// }

// parseFeatureElement('Page > locator btn');
