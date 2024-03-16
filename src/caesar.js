// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    //console.log(`\n\ninput: ${input}  shift: ${shift}  encode: ${encode}`);

      if (shift === 0 || shift > 25 || shift < -25 || !shift) return false;
      let encodedMsg = [];
      let inputArray = input.split("");
      //console.log(JSON.stringify(inputArray));
      inputArray.forEach((char) => {
        let newChar;
        let currentIndex = abc.findIndex((letter) => letter == char);
        /* if(!abc.includes(char)){
          console.log("not a letter");
          newChar = char;
        } */ 
        
        if (!/[a-z]/i.test(char)) {
          //console.log("not a letter");
          newChar = char;
        }else {
        if(encode){
          newIndex = currentIndex + shift;
          //console.log(`${newIndex} = ${currentIndex} + ${shift}`);
        } else {
          newIndex = currentIndex - shift;
          //console.log(`${newIndex} = ${currentIndex} - ${shift}`);
        }
        
        if(newIndex > 25) {
          //console.log(`${newIndex} was > 25`);
          newIndex = newIndex % 26;
          //console.log(`it is now: ${newIndex}`);
        }

        if(newIndex < 0) {
          //console.log(`${newIndex} is < 0`);
          newIndex = 26 + newIndex;
        }
         newChar = abc[newIndex];
        } 
        //console.log(`letter: ${char} at ${currentIndex} shifted by ${shift} is now ${newChar}`);
        encodedMsg.push(newChar);
        //console.log(`encodedMsg: ${encodedMsg}`);
      });
 
  
    const finalMsg = encodedMsg.join("");
    //console.log(`finalMsg: ${finalMsg}`);
    return finalMsg;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


