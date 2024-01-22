var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-']



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}



function generatePassword() {
  var possibleCharacters = [];
  var password = ""

  var passwordLength = prompt("How many characters do you want in your password?");
   if (passwordLength >= 128) {
    alert("Password can be no more than 128 characters");
    return
  }
  if (passwordLength < 8) {
    alert("password can be no shorter than 8 characters");
    return
  }
  
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  if (lowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCaseChar);
  } 
  
  var upperCase = confirm("Do you want uppercase letters in your password?");
  if (upperCase === true) {
    possibleCharacters = possibleCharacters.concat(upperCaseChar);
  }
  
  var numbers = confirm("Do you want to include numbers in your passowrd?");
  if (numbers === true) {
    possibleCharacters = possibleCharacters.concat(numberChar);
  }
  
  var specialCharacters = confirm("Do you want to include special characters in your password?");
  if (specialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialChar);
  }
  
  if(possibleCharacters.length === 0) {
    alert("You did not select anything.");
    return password
  }

 for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random()*(possibleCharacters.length -1));
  var randomLetter = possibleCharacters[randomNum];
  password+=randomLetter;
  
}
return password
}

generateBtn.addEventListener("click", writePassword);
