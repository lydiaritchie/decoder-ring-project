// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //the square represented by an array within an array
  const polySquare = [
    //      0    1    2    3    4    5
    [],
    /* 1 */ ["", "a", "b", "c", "d", "e"],
    /* 2 */ ["", "f", "g", "h", "(i/j)", "k"],
    /* 3 */ ["", "l", "m", "n", "o", "p"],
    /* 4 */ ["", "q", "r", "s", "t", "u"],
    /* 5 */ ["", "v", "w", "x", "y", "z"],
  ];
  function polybius(input, encode = true) {
    //to encode a word into a number
    let output = "";
    if (encode) {
      let outputNum = [];
      //console.log(`before: ${input}`);
      input = input.toLowerCase();
      //console.log(`after: ${input}`);
      let inputArray = input.split("");
      inputArray.forEach((char) => {
        if (!/[a-z]/i.test(char)) {
          //char isn't a letter
          outputNum.push(" ");
        } else if (char === "i" || char === "j") {
          outputNum.push(42);
          //console.log("the char is either i or j");
        } else {
          polySquare.forEach((array) => {
            let hasChar = array.includes(char);
            if (hasChar) {
              let charIndex = array.indexOf(char);
              let arrayIndex = polySquare.indexOf(array);
              outputNum.push(charIndex);
              outputNum.push(arrayIndex);
              //console.log(`charIndex: ${charIndex} arrayIndex: ${arrayIndex}`);
              //console.log(outputNum);
            }
          });
        }
      });

      output = outputNum.join("");
      //end of the code block that will run if encode is true
    } else {
      //taking a number and turning it into a word
      //DECODING SECTION
      //how to find the length of all the nums without spaces -- then return false
      //for each section of twos find the index of the array and the index of the letter
      let numArray = [];
      //let numHolder = "";
      let inputArray = input.split(" ");
      let hasOddLength = false;
      //will handle spaces in number sequences
      //console.log(`og input: ${input} inputArray: ${inputArray}`);
      

        //if there is more than one word
        //loop through each word by itself
        inputArray.forEach((sequence) => {
          if(sequence.length%2 !== 0){
            hasOddLength = true;
          }
          if(numArray.length > 0) numArray.push(" ");
          for(let i = 0; i < sequence.length; i += 2){
            let pair = "";
            pair = sequence[i] + sequence[i+1];
            numArray.push(pair);
          }
        });
      
      if(hasOddLength) return false;

      //console.log(`numArray ${numArray}`);
      //problem -- output don't know how to handle spaces
      let output = "";
      
      numArray.forEach((num) => {
        //console.log(`num: ${num}`);
        if(num === " ") {
          output+=" ";
        } else {
        output += polySquare[num[1]][num[0]];
        //console.log(polySquare[num[1]][num[0]]);
        }
      });
      //console.log(output);
      return output;
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


/* 
  for (let i = 0; i < input.length; i++) {
        console.log(`current num: ${input[i]}`);
        if (input[i] === " ") {
          numArray.push(" ");
        } else {
          if (numHolder.length < 2) {
            //it is the first or second number
            numHolder += input[i];

            console.log(`${numHolder} is ${numHolder.length} long`);
          } else if (numHolder.length === 2) {
            //console.log(`numHolder is === 2`);
            numArray.push(numHolder);
            numHolder = "";
            numHolder += input[i];
        }
      }
*/