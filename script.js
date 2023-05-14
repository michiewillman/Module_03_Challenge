// Assignment Code

//  Note: querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
//  Reminder: a Selector is used in HTML/CSS to style and reference elements
//  Breakdown: This variable line is establishing the first element in the document object that qualifies as having the selector "#generate", which is the button in index.html that has the id="generate" aka #generate

var generateBtn = document.querySelector("#generate");

//...prompts user for password...

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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

