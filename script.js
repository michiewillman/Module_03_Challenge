// Assignment Code

//  Note: querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
//  Reminder: a Selector is used in HTML/CSS to style and reference elements
//  Breakdown: This variable line is establishing the first element in the document object that qualifies as having the selector "#generate", which is the button in index.html that has the id="generate" aka #generate
var generateBtn = document.querySelector("#generate");

// When prompted for password criteria
//  I select which criteria to include in the password
// When prompted for the length of the password
//  I choose a length of at least 8 characters and no more than 128 characters
// When asked for character types to include in the password
//  I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// I answer each prompt
//  my input should be validated and at least one character type should be selected
// All prompts are answered
//  a password is generated that matches the selected criteria
// Password is generated
//  the password is either displayed in an alert or written to the page


  // Set all character choice values
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var passLength = "";


  // Get password choices from user
  function  getPassLength() {
    var passLength = parseInt(prompt("How many characters should the password be?", "Must be between 8 and 128."));

    // Repeat function if length does not meet requirements
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Sorry, your entry must be a number between 8 and 128.");
      getPassLength();
    } else {
      return passLength;
    }
  }

  function generatePassword() {
    getPassLength();
    var useNumbers = confirm("Should the password use numbers?");
    var useLower = confirm("Should the password use Lowercase letters?");
    var useUpper = confirm("Should the password use Uppercase letters?");
    var useSpecial = confirm("Should the password use special characters?");

    var choiceString = "";
    var newPassword = "";

    // Declare functions to generate random characters if needed
    // function randomNumber() {
    //   Math.floor(Math.random() * 10);
    // } 
    // function randomLower() {
    //   alpha[Math.floor(Math.random() * alpha.length)];
    // }
    // function randomUpper() {
    //   alpha[Math.floor(Math.random() * alpha.length)].toUpperCase();
    // }
    // function randomSpecial() {
    //   special[Math.floor(Math.random() * special.length)];
    // }
  
    // Based on user inputs, these variables will be true or false
    if (useUpper) {
      choiceString += upperLetters.join("");
    }
    if (useLower) {
      choiceString += lowerLetters.join("");
    }
    if (useNumbers) {
      choiceString += numbers.join("");
    }
    if (useSpecial) {
      choiceString += special.join("");
    } 
  
    for (let i = 0; i < passLength; i++) {
      let random = Math.floor(Math.random() * choiceString.length);
      newPassword += choiceString.charAt(random);
    }
  
    return newPassword;
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // // Generates the first password on page load
writePassword();

// // //Alerts the user of the new password
window.alert("Your new password has been generated.");