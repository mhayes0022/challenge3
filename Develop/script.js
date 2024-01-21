// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ()
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  var passwordLength = prompt("How many characters do you want in your password?");

  if (passwordLength >= 128) {
    alert("Password can be no more than 128 characters");
    return
  }
  if (passwordLength <= 8) {
    alert("password can be no shorter than 8 characters");
    return
  }
  
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  if (lowerCase === true) {

  }

  var upperCase = confirm("Do you want uppercase letters in your password?");
  if (upperCase === true) {

  }

  var numbers = confirm("Do you want gto include numbers in your passowrd?");
  if (numbers === true) {

  }

  var specialCharacters = confirm("Do you want to include special characters i nyour password?");
  if (specialCharacters === true) {
    
  }

  console.log(lowerCase)
  console.log(passwordLength);
return"My password"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
