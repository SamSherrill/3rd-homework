// # MAIN GOAL
// GIVEN I need a new, secure password

// Additional hints:
// Variables should be descriptive, and camelCased.
// Add comments before each function simply describing it.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// testing area:
// 97-122 are lowercase letters in String.fromCharCode()
// This code generates a random lowercase letter
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// 65-90 are uppercase letters in String.fromCharCode()
// This code generates a random uppercase letter
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// 48-57 are the numbers 0-9 in String.fromCharCode()
// This code generates a random number 0-9
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecialChar() {
  var specialCharacters = "!@#$%^&*(){}[]=+-\/";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

console.log(randomLowercase());
console.log(randomUppercase());
console.log(randomNumber());
console.log(randomSpecialChar());

// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters

  passwordLength = prompt("How long would you like your password to be? Please type your response as an integer between 8 & 128.");
  lowercaseYN = confirm("Would you like the password to include lowercase letters? Press OK for yes, or press Cancel for no.");
  uppercaseYN = confirm("Would you like the password to include uppercase letters? Press OK for yes, or press Cancel for no.");
  numbersYN = confirm("Would you like the password to include numbers? Press OK for yes, or press Cancel for no.");
  specialCharsYN = confirm("Would you like the password to include special characters (ex: !@#$, etc.) letters? Press Okay for yes, or press Cancel for no.");

  console.log("Password length: " + passwordLength);
  console.log("Lowercase? " + lowercaseYN);
  console.log("Uppercase? " + uppercaseYN);
  console.log("Numbers? " + numbersYN);
  console.log("Special Chars? " + specialCharsYN);


  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  if (lowercaseYN === false && uppercaseYN === false && numbersYN === false && specialCharsYN === false) {
    alert("You did not say yes to any of the character options. Please refresh your browser, then select yes for at least one character type.")
  } else {

  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  function generatePassword(length, lowercase, uppercase, numbers, specialCharacters) {

    var characterTypes = [];

    if (lowercase) {
      characterTypes.push("lowercaseTrue");
    }

    if (uppercase) {
      characterTypes.push("uppercaseTrue");
    }

    if (numbers) {
      characterTypes.push("numbersTrue");
    }

    if (specialCharacters) {
      characterTypes.push("specialCharactersTrue");
    }

    console.log(characterTypes);

    // This empty array is needed for the next for loop
    var passwordCharArray = [];

    for (var i = 0; i < length; i++) {
      // 1) create string of random

      // selecting a random character type from the 
      var randomCharacterType = Math.floor(Math.random() * characterTypes.length);
      var charTypeSelected = characterTypes[randomCharacterType];

      //testing data
      console.log("randomCharacterType is: " + randomCharacterType + "charTypeSelected is: " + charTypeSelected);

      if (charTypeSelected === "lowercaseTrue") {
        var newCharacter = randomLowercase();
      } else if (charTypeSelected === "uppercaseTrue") {
        var newCharacter = randomUppercase();
      } else if (charTypeSelected === "numbersTrue") {
        var newCharacter = randomNumber();
      } else if (charTypeSelected === "specialCharactersTrue") {
        var newCharacter = randomSpecialChar();
      } else {
        // if an error in this process happens, this is a description of how the error happended. This should never be console logged. This function is working.
        console.log("Error in generating newCharacter.")
      }

      console.log("newCharacter is: " + newCharacter);
      // var addToPassword = newPassword.concat(newCharacter);
      // var newPassword = addToPassword;

      passwordCharArray.push(newCharacter);
    }

    // var str1 = "Hello ";
    // var str2 = "world!";
    // var res = str1.concat(str2);

    // Start newPassword off with the first leeter in passwordCharArray
    newPassword = passwordCharArray[0];

    // Then run a for loop to concatinate the remaining letters in passwordCharArray
    // This for loop starts at index 1, because newPassword is already started with the index 0 character
    for (var j = 1; j < passwordCharArray.length; j++) {
      newPassword = newPassword.concat(passwordCharArray[j]);
    }

    console.log("newPassword is: " + newPassword);
    return newPassword;
  }

  // COMMENTED OUT BUT USING var password = generatePassword();
  var password = generatePassword(passwordLength, lowercaseYN, uppercaseYN, numbersYN, specialCharsYN);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  alert("Your new password is: " + password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);