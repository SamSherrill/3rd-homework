// This is original code given out with the assignment. It is used to create the var generateBtn, which is later used to 
// create a listener to monitor for clicks. I chose to leave this in it's original location, at the top of the code.
var generateBtn = document.querySelector("#generate");

// The first step is creating functions that provide random characters of specific types.

// 97-122 are lowercase letters in String.fromCharCode(). The function below generates a random lowercase letter.
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// 65-90 are uppercase letters in String.fromCharCode() The function below generates a random uppercase letter.
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// 48-57 are the numbers 0-9 in String.fromCharCode(). The function below generates a random number 0-9.
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// It was easiest to just create a string of special characters. The function below generates a random character from that string.
function randomSpecialChar() {
  var specialCharacters = "!@#$%^&*(){}[]=+-\/";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

// The writePassword() function does all of the work from here
function writePassword() {
  passwordLength = prompt("How long would you like your password to be? Please type your response as an integer between 8 & 128.");

  // Some initial tests to determine if the user entered valid information when prompted for passwordLength above
  passwordLength = parseInt(passwordLength);
  if (Number.isInteger(passwordLength) === false) {
    alert("Please press Generate Password again. When asked how long you would like your password to be, please enter a number between 8 & 128.")
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please press Generate Password again. When asked how long you would like your password to be, please enter a number between 8 & 128.")
  } else {
    // Once passwordLength is validated as an integer, and between 8 & 128, writePassword() proceeds in this else block
    lowercaseYN = confirm("Would you like the password to include lowercase letters? Press OK for yes, or press Cancel for no.");
    uppercaseYN = confirm("Would you like the password to include uppercase letters? Press OK for yes, or press Cancel for no.");
    numbersYN = confirm("Would you like the password to include numbers? Press OK for yes, or press Cancel for no.");
    specialCharsYN = confirm("Would you like the password to include special characters? Press OK for yes, or press Cancel for no.");

    // Below is another test to confirm that the user selected at least one type of character in the preceeding 4 prompts
    if (lowercaseYN === false && uppercaseYN === false && numbersYN === false && specialCharsYN === false) {
      alert("You did not press OK for any of the character types. Please press Generate Password again, then select OK for at least one character type.")
    } else {
      // This function does the main magic of creating a new password, but only after we've validated that we have valid inputs from the user
      function generatePassword(length, lowercase, uppercase, numbers, specialCharacters) {

        // First step in generatePassword() is to create an array that will be used later to randomize character types
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

        // This empty array is needed for the next for loop.
        var passwordCharArray = [];

        // The best way I found to create a new password was to first create a new array with randomly generated characters each in their own index spot.
        // Directly after this loop, you'll see another loop that concatenates this array into a string called newPassword.
        for (var i = 0; i < length; i++) {

          // These vars are setup to select a random character type from the characterTypes array we created at the start of generatePassword().
          var randomCharacterType = Math.floor(Math.random() * characterTypes.length);
          var charTypeSelected = characterTypes[randomCharacterType];

          if (charTypeSelected === "lowercaseTrue") {
            var newCharacter = randomLowercase();
          } else if (charTypeSelected === "uppercaseTrue") {
            var newCharacter = randomUppercase();
          } else if (charTypeSelected === "numbersTrue") {
            var newCharacter = randomNumber();
          } else if (charTypeSelected === "specialCharactersTrue") {
            var newCharacter = randomSpecialChar();
          } else {
            // If an error in this process happens, this is a description of how the error happended. This should never be console logged. This function is working.
            console.log("Error in generating newCharacter.")
          }

          passwordCharArray.push(newCharacter);
        }

        // Start newPassword off with the first letter in passwordCharArray
        newPassword = passwordCharArray[0];

        // Then run a for loop to concatenate the remaining letters in passwordCharArray
        // This for loop starts at index 1, because newPassword is already started with the index 0 character
        for (var j = 1; j < passwordCharArray.length; j++) {
          newPassword = newPassword.concat(passwordCharArray[j]);
        }

        // The magic of generatePassword() is done. We return new password.
        return newPassword;
      }
    }
  }

  // Write password to the #password input
  var password = generatePassword(passwordLength, lowercaseYN, uppercaseYN, numbersYN, specialCharsYN);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);