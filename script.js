// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Will use charAt to call a character for lower and upper alphabet and special sign"
var alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSign = "0123456789";
var specialSign = "!#$%&*+-/:;<=>?@\^_~";

function randomInt(min, max) {
  var x = Math.floor((Math.random() * max) + min);
  return x;
}

function generatePassword() {
  var passLength = parseInt(prompt("How long do your want your password to be?"));
  var smallCase = confirm("Do you want small cases?");
  var upperCase = confirm("Do you want upper cases?");
  var numCase = confirm("Do you want numbers?");
  var specialCase = confirm("Do you want special cases?");

  var addString;
  var passString = "";

  if (smallCase || upperCase || numCase || specialCase) {
    addString = alphabetSmall + alphabetUpper + numberSign + specialSign; 
    for (var i = 0; i < passLength; i++) {
      passString = passString + addString.charAt(randomInt(0,addString.length - 1))
    }
    console.log(passString);
    return passString; // Returns a string
  } 
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
