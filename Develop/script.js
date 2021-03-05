// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let letters = "qwertyuiopasdfghjklzxcvbnm".split("");
let upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
let numbers = "1234567890".split("");
let specials = "`~!@#$%^&*()-_+={}[]:;'?/.>,<|\\\"".split("");

console.log(specials);
let passwordLength = 0;
let hasUpperCase = false;
let hasLowerCase = false;
let hasNumeric = false;
let hasSpecials = false;

function askLengthPassword(){
  passwordLength = prompt("Please choose length of password.\nMinimum is 8, maximum is 128");
}

function generatePassword(){
  
}