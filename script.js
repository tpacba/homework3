// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// All the characters in one string, will use charAt to call later
var alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSign = "0123456789";
var specialSign = "!#$%&*+-/:;<=>?@^_~";

// Returns a random integer between ranges
function randomInt(min, max) {
  var x = Math.floor(Math.random() * max + min);
  return x;
}

function generatePassword() {

  do {
    // Prompt user for length
    var passLength = prompt("How long do your want your password to be? Must be at least 8 characters and no more than 128 characters.");
    
    // Parse answer into an integer, empty or anything other than integers return NaN
    passLength = parseInt(passLength);

    // Stop the function if passLength is NaN
    if (isNaN(passLength)) {
      alert("Please enter a valid number");
      return "No password given. Please try again.";
    }
  } while (passLength < 8 || passLength > 128) // Restrict the user from continuing with do while loop if prompt is less than 8 or greater than 128

  // Declare the rest of the confirms
  var smallCase = confirm("Do you want small cases?");
  var upperCase = confirm("Do you want upper cases?");
  var numCase = confirm("Do you want numbers?");
  var specialCase = confirm("Do you want special cases?");

  // Declare a variable to be used later for the switch statement
  var order;

  //Determine how many combinations of prompts
  if (smallCase) {
    if (upperCase) {
      if (numCase) {
        if (specialCase) {
          order = 1; //case 1: small, upper, num, special
        } else {
          order = 2; //case 2: small, upper, num
        }
      } else {
        if (specialCase) {
          order = 3; //case 3: small, upper, special
        } else {
          order = 4; //case 4: small, upper
        }
      }
    } else {
      if (numCase) {
        if (specialCase) {
          order = 5; //case 5: small, num, special
        } else {
          order = 6; //case 6: small, num
        }
      } else {
        if (specialCase) {
          order = 7; //case 7: small, special
        } else {
          order = 8; //case 8: small
        }
      }
    }
  } else {
    if (upperCase) {
      if (numCase) {
        if (specialCase) {
          order = 9; //case 9: upper, num, special
        } else {
          order = 10; //case 10: upper, num
        }
      } else {
        if (specialCase) {
          order = 11; //case 11: upper, special
        } else {
          order = 12; //case 12: upper
        }
      }
    } else {
      if (numCase) {
        if (specialCase) {
          order = 13; //case 13: num, special
        } else {
          order = 14; //case 14: num
        }
      } else {
        if (specialCase) {
          order = 15; //case 15: special
        } else {
          order = 16; //case 16: ...
        }
      }
    }
  }

  var addString;
  var passString = "";

  switch (order) {
    case 1:
      // Combine all needed characters for the prompt into addString
      addString = alphabetSmall + alphabetUpper + numberSign + specialSign;

      // Count how long the password should be
      for (var i = 0; i < passLength; i++) {
        // Add a random character from addString into passString
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      // Return a string
      return passString;
    case 2:
      addString = alphabetSmall + alphabetUpper + numberSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 3:
      addString = alphabetSmall + alphabetUpper + specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 4:
      addString = alphabetSmall + alphabetUpper;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 5:
      addString = alphabetSmall + numberSign + specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 6:
      addString = alphabetSmall + numberSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 7:
      addString = alphabetSmall + specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 8:
      addString = alphabetSmall;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 9:
      addString = alphabetUpper + numberSign + specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 10:
      addString = alphabetUpper + numberSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 11:
      addString = alphabetUpper + specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 12:
      addString = alphabetUpper;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 13:
      addString = numberSign + specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 14:
      addString = numberSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 15:
      addString = specialSign;

      for (var i = 0; i < passLength; i++) {
        passString =
          passString + addString.charAt(randomInt(0, addString.length));
      }

      return passString;
    case 16:
      //No prompts accepted
      return "No password given. Please try again.";
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
