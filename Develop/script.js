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
let passwordLength = "1a";
let hasUpperCase = false;
let hasLowerCase = false;
let hasNumeric = false;
let hasSpecials = false;

function askLengthPassword(){
  //creating count to use it for messaging in case if user enters not valid length
  let count = 0; 
  let input;
  //while loop to keep asking user to enter a valid number
  //check if value is numeric and fall into boundaries
   while(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)){
     if(count === 0){
      input = prompt("Please choose length of password.\nMinimum is 8, maximum is 128");
     } else{
       //if count is not 0, ask user to enter valid numeric value
      input = prompt("Please choose valid length of password (Make sure you enter numeric value).\nMinimum is 8, maximum is 128");
     }
     count++;
    }
    passwordLength = parseInt(input);
  return passwordLength;
}

function generatePassword(){
  console.log(askLengthPassword()); 
}