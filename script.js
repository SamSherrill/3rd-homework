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
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

// 65-90 are uppercase letters in String.fromCharCode()
// This code generates a random uppercase letter
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));

// 48-57 are the numbers 0-9 in String.fromCharCode()
// This code generates a random number 0-9
console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));

function randomSpecialChar() {
  const specialCharacters = "!@#$%^&*(){}[]=+-\/";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

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

  firstResponse = confirm("Can you hear me?");
  passwordLength = prompt("How long would you like your password to be? Please type your response as an integer between 8 & 128.");
  lowercaseYN = confirm("Would you like the password to include lowercase letters? Press OK for yes, or press Cancel for no.");
  uppercaseYN = confirm("Would you like the password to include uppercase letters? Press OK for yes, or press Cancel for no.");
  numbersYN = confirm("Would you like the password to include numbers? Press OK for yes, or press Cancel for no.");
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

  // COMMENTED OUT BUT USING var password = generatePassword();
  // var password = generatePassword() {
    
  //   if (lowerCaseYN) {
  //     newPassword.push()
  //   }
  // }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  alert("Your new password is: " + password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);