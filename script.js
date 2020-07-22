// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generatePassword() {
  var passLength = prompt("How long do your want your password to be?");
  var smallCase = confirm("Do you want small cases?");
  var upperCase = confirm("Do you want upper cases?");
  var numCase = confirm("Do you want numbers?");
  var specialCase = confirm("Do you want special cases?");


  return "passLength:" + passLength + "; smallCase:" + smallCase + "; upperCase:" + upperCase + "; numCase:" + numCase + "; specialCase:" + specialCase;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
