//String Methods
let speech =
  "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes… the ones who see things differently — they're not fond of rules… You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things… they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.";

//Number of letters
console.log(speech.length);

//Letters 50-100 of the speech
let slice = speech.slice(50, 100);
console.log(slice);

//100 letters after the 200th character
console.log(speech.substr(200, 100));

//Letter at possition 200
console.log(speech.charAt(20));

//Split by words
console.log(speech.split(" "));

//Number and Array Methods
const numberArray = [4, 3, 7, 2, 5, -5, 3, 1, 7];
const wordArray = [
  "crazy",
  "misfits",
  "rebels",
  "troublemakers",
  "round",
  "pegs",
  "square"
];

//Join array of words with space
console.log(wordArray.join(" "));

//Add new element
wordArray.push("different");
console.log(wordArray.join(" "));

//Shift array forward/remove first item
wordArray.shift();
console.log(wordArray.join(" "));

//For each item in array add together
let sum = 0;
numberArray.forEach(addFunction);
console.log(sum);

function addFunction(item) {
  sum += item;
  //Print each number as a string
  console.log(toString(item));
}

//Date Methods
const date = new Date();

//Return Day of the current date
console.log(date.getDate());

//Return current hours of the current date
console.log(date.getHours());

date.setDate(date.getDate() - 30);
console.log(date);
