// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Will use charAt to call a character for lower and upper alphabet and special sign"
var alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSign = "0123456789";
var specialSign = "!#$%&*+-/:;<=>?@\^_~";


function generatePassword() {
  var passLength = prompt("How long do your want your password to be?");
  var smallCase = confirm("Do you want small cases?");
  var upperCase = confirm("Do you want upper cases?");
  var numCase = confirm("Do you want numbers?");
  var specialCase = confirm("Do you want special cases?");

  var pushArray;

  if (smallCase || upperCase || numCase || specialCase) {
    pushArray = alphabetSmall + alphabetUpper + numberSign + specialSign;
    for (var i = 0; i < passLength.parsInt(); i++) {
      
    }
    console.log(passLength.parsInt());
    return pushArray;
  } 
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
