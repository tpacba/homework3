// All the characters in one string, will use charAt to call later
var alphabetSmall = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberSign = "0123456789";
var specialSign = "!#$%&*+-/:;<=>?@^_~";

// Returns a random integer between ranges but subtract 1 from max to apply real-time counting
function randomIntCount(min, max) {
  var x = Math.floor(Math.random() * (max - 1) + min);
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
      return "No password to give. Please try again.";
    }
  } while (passLength < 8 || passLength > 128) // Restrict the user from continuing with do while loop if prompt is less than 8 or greater than 128

  // Declare totalString outside of function to be unviversal function, will be empty for now to add characters later
  var totalString = "";

  // Create a function that adds characters into totalString
  function addChar(type) {
    totalString = totalString + type;
    console.log("Characters included: " + totalString);
    return totalString;
  }

  // Confirm the user whether or not they want to add specific characters, call the function addChar to add characters into totalString
  if (confirm("Do you want small cases?")) {
    addChar(alphabetSmall);
  }
  if (confirm("Do you want upper cases?")) {
    addChar(alphabetUpper);
  }
  if (confirm("Do you want numbers?")) {
    addChar(numberSign);
  }
  if (confirm("Do you want special characters?")) {
    addChar(specialSign);
  }

  // If user chose no on all confirms, return the try again message
  if (totalString == "") {
    return "No password to give. Please try again."
  } else {
    // Declare empty passwordString outside of the for loop, will be added with random characters
    var passwordString = "";
    // Run the for loop for whatever times the password length the user gave in the beginning
    for (var i = 0; i < passLength; i++) {
      // Add characters from totalString at random into an empty passwordString then return it
      passwordString = passwordString + totalString.charAt(randomIntCount(0, totalString.length));
    }
    return passwordString;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // Only function that hasn't been called yet
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
