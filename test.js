var fs = require("fs");
var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");
var number = 0;

var badlt = /[bdfghlqptxy]/;

for (var testWord of words) {
  if (testWord.match(badlt)) {
    continue;
  }
  if (testWord.length <= 4) {
    continue;
  }
  number = number + 1;
  console.log(number);
  if (number <= 10000) {
    fs.appendFile("final.txt", testWord, function (err) {
      if (err) throw err;
    });
  }
}
