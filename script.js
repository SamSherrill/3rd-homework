// # MAIN GOAL
// GIVEN I need a new, secure password

// Additional hints:
// Variables should be descriptive, and camelCased.
// Add comments before each function simply describing it.

// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  firstResponse = confirm("Can you hear me?");
  passwordLength = prompt("How long would you like your password to be? Please type your response as an integer between 8 & 128.");
  lowercaseYN = confirm("Would you like the password to include lowercase letters? Press OK for yes, or press Cancel for no.");
  uppercaseYN = confirm("Would you like the password to include UPPERcase letters? Press OK for yes, or press Cancel for no.");
  numbersYN = confirm("Would you like the password to include numbers? OK = yes; CANCEL = no.");
  specialCharsYN = confirm("Would you like the password to include special characters (ex: !@#$, etc.) letters? Press Okay for yes, or press Cancel for no.");

  console.log("writePassword function can hear you: " + firstResponse);
  console.log("Password length: " + passwordLength);
  console.log("Lowercase? " + lowercaseYN);
  console.log("Uppercase? " + uppercaseYN);
  console.log("Numbers? " + numbersYN);
  console.log("Special Chars? " + specialCharsYN);


  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  if (lowercaseYN === false && uppercaseYN === false && numbersYN === false && specialCharsYN === false) {
    alert("You did not say yes to any of the character options. Please refresh your browser, then select yes for at least one character type.")
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);