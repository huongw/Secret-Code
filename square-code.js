const squareCode = function(message) {
  
  let string = message.split(" ").join("");

  const lengthOfCols = Math.ceil(Math.sqrt(string.length));

  let secretMessage = "";

  for (let i = 0; i < lengthOfCols; i++) { 
    for (let j = i; j < string.length; j += lengthOfCols) {
      secretMessage += string[j];
    }
    
    if (i < lengthOfCols - 1) {
      secretMessage += ' ';
    }
  }

  return secretMessage;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));