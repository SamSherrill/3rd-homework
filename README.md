# 3rd Homework: Password Generator Made with JavaScript

## Application Description

The purpose of this homework assignment was to create an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript. It features a clean and polished user interface, which is responsive, ensuring that it adapts to multiple screen sizes.

## Features of the Password Generator

This application allows users to simply & easily create new passwords. These passwords are based on criteria that the user selects. Passwords can be up to 128 characters long, but must be 8 characters long at minimum. The application will prompt the user to try again if the they do not enter an integer from 8 to 128.

The application also allows for passwords to be composed of 4 different character types:
* Lowercase letters
* Uppercase letters
* Numbers 0-9
* Special characters

The user is prompted about each character type. They can choose any or all of the 4 offered character types. The user must at least choose 1 of those 4 character types, or they are directed to press the "Generate Password" button again.

Once the user has confirmed that they want at least one of the offered character types, a password is generated in the blink of an eye. It is immediately displayed in the box above the "Generate Password" button. Here is an example of how a newly generated password is displayed:

![Password Displayed in Output Box](/screenshots/password-output-displayed.png)

The user can continue to generate as many passwords as they'd like without refreshing their browser. They simply need to press the "Generate Password" button again. Once pressed again, the user will be directed through the process again by the same prompts as before.



## Notes About the Code

The HTML contained in [index.html](./index.html) is kept to a minimum. The CSS contained in [style.css](./style.css) is also kept simple, since our goal is a straight-forward user experience.

The magic of the application happens inside [script.js](./script.js). There you'll see comments about each function, if statement, and for loop. You'll also see a few other helpful comments explaining some variables or other aspects of the code. All variables & functions are named descriptively. Spacing within the document is intended for the best readability. Below is an example of the code and the comments describing that code:

![Example of comments and code in script.js](/screenshots/js-code-example.png)

## Use the Password Generator Yourself!

Check out the password generator [here](https://samsherrill.github.io/3rd-homework/).


<!-- Readme should have screenshots!  -->