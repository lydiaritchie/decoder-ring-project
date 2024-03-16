// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const abc = "abcdefghijklmnopqrstuvwxyz";

  //helper function that checks if the arguments for substitution() are valid
  function guardClauses(input, alphabet) {
    if(!alphabet || alphabet.length!==26) {
      return false;
    }
    let characters = {};
    for(let char of alphabet){
      if(characters[char]){
        return false;
      }else{
        characters[char] = true;
        //defines that this char has been encountered before
      }
    }
    return true;
  }
 

  function substitution(input, alphabet, encode = true) {
    if(!guardClauses(input, alphabet)) return false;
    //in order to use the map() method, must work with arrays.
    let inputArray = input.split('');
    //console.log(inputArray);
    let output = [];
    if(encode){
      //encoding the input
      output = inputArray.map((char) => {
        let charIndex = abc.indexOf(char);
        //console.log(`charIndex: ${charIndex}`);
        if(charIndex === -1) return " ";
        return alphabet[charIndex];
      });

    } else {
      //decoding the input
      output = inputArray.map((char) => {
        let charIndex = alphabet.indexOf(char);
        //console.log(`charIndex: ${charIndex}`);
        if(charIndex === -1) return " ";
        return abc[charIndex];
      });

    }
    //console.log(`${output} ==> ${output.join("")}`);
    return output.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
