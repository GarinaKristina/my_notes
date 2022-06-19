function letter(a) {
  let newLetter = a.split('').filter((str) => str.match(/[aeoui]/gm));
  console.log(newLetter);
  let countLetters = newLetter.length;
  console.log(countLetters);
}
letter('Hello my dear world, see you tommorow');
