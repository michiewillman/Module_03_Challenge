// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));



    // Declare functions to generate random characters if needed
    function randomNumber() {
      Math.floor(Math.random() * 10);
    } 
    function randomLower() {
      alpha[Math.floor(Math.random() * alpha.length)];
    }
    function randomUpper() {
      alpha[Math.floor(Math.random() * alpha.length)].toUpperCase();
    }
    function randomSpecial() {
      special[Math.floor(Math.random() * special.length)];
    }
  

    var charTypeSelected = false;
    // This loop ensures the user selects at least one character type
    while (charTypeSelected == false) {
      var lowerCase = getChoice("lowercase");
      var upperCase = getChoice("uppercase");
      var numericCharacters = getChoice("numeric");
      var specialCharacters = getChoice("special");
      if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
        charTypeSelected = true;
      } else {
        window.alert("You must select at least one character type.")
      }
    }