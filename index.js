// Set input here 
const input = 'GEEKSFORGEEKS';

var substrings = [];
var substring = '';
var maxLength = 0;

for (let i1 = 0; i1 < input.length; i1++) {
   // Main loop
   substring = '';
   for (let i2 = i1; i2 < input.length; i2++) {
      // From the i1 starting index build a substring without letter repetition
      const letter = input[i2];
      if (!substring.includes(letter)) {
         substring += letter;
         continue;
      }
      if (!substrings.includes(substring) && substring.length >= maxLength) {
         substrings.push(substring);
         maxLength = substring.length;
      }
      break;
   }
   if (!substrings.includes(substring) && substring.length >= maxLength) {
      substrings.push(substring);
      maxLength = substring.length;
   }
}

console.log('SUBSTRINGS WITHOUT REPETITION', substrings);
console.log('MAX LENGTH', maxLength);
let results = '';
for (let str of substrings)
   if (str.length == maxLength) {
      if (results == '') results = str;
      else results = results + ', ' + str;
   }
console.log('LONGEST SUBSTRINGS WITHOUT REPETITION:', results, '- CONTAINING', maxLength, 'LETTERS.');
