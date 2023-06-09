// Assignment Code

//  Note: querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
//  Reminder: a Selector is used in HTML/CSS to style and reference elements
//  Breakdown: This variable line is establishing the first element in the document object that qualifies as having the selector "#generate", which is the button in index.html that has the id="generate" aka #generate
var generateBtn = document.querySelector("#generate");

// Set all character choice values
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Get password length choice from user
var passLength = getPassLength();
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

// Generate password using user's character choices
function generatePassword() {
  
  // Prompt user for their choices
  var useNumbers = confirm("Should the password use numbers?");
  var useLower = confirm("Should the password use Lowercase letters?");
  var useUpper = confirm("Should the password use Uppercase letters?");
  var useSpecial = confirm("Should the password use special characters?");

  // Set empty strings for choice chars to be drawn from randomly
  var choiceString = "";
  var newPassword = "";

  // If user declines using all character choices
  if (!useNumbers && !useLower && !useUpper && !useSpecial) {
    alert("You must choose at least one character type to use in the password. Please Generate Password again.");
    return "";
  } else // Continue function to generate password
    {

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

    for (var i = 0; i < passLength; i++) {
      var random = Math.floor(Math.random() * choiceString.length);
      newPassword += choiceString.charAt(random);
    }

    // // //Alerts the user of the new password
    alert("A new password has been generated.");

    return newPassword;
  
  }
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