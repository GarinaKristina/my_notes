function word(a = "hELlo _____________ world") {
  let wordArray = a.split(" ").filter((str) => str.match(/[a-z]/g));
  console.log(wordArray);
  let wordNew = wordArray
    .map((word) => word.toLowerCase())
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join("");
  let result = "#" + wordNew;
  console.log(result);
}
word();
