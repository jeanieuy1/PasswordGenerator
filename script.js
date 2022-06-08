// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Need to make to create a variable that can change
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Listed out the potential characters for the password combinations.
  var passwordLength = 8;
  //No less than 8 character passwords
  var password = "";
};

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber + 1);
};
document.getElementById("password").value = password;


//generates the password
return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
