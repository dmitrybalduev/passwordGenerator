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

let lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm".split("");
let upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
let numbers = "1234567890".split("");
let specials = "`~!@#$%^&*()-_+={}[]:;'?/.>,<|\\\"".split("");

console.log(specials);
let passwordLength = "1a";
let hasUpperCase = false;
let hasLowerCase = false;
let hasNumeric = false;
let hasSpecials = false;

//function to ask user desired length of password
function askLengthPassword(){
  //creating count to use it for messaging in case if user enters not valid length
  let count = 0; 
  let input;
  //while loop to keep asking user to enter a valid number
  //check if value is numeric and fall into boundaries
   while(isNaN(input) || (input < 8 || input > 128)){
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

//function to ask user if user wants to include lower case letters
function askLowerCase(){
  let input = confirm("Would you like to include lower case letters?");
  hasLowerCase = input;
  return input;
}

//function to ask user if user wants to include upper case letters
function askUpperCase(){
  let input = confirm("Would you like to include upper case letters?");
  hasUpperCase = input;
  return input;
}

//function to ask user if user wants to include numeric values
function askNumeric(){
  let input = confirm("Would you like to include numeric values?");
  hasNumeric = input;
  return input;
}

//function to ask user if user wants to include special characters
function askSpecials(){
  let input = confirm("Would you like to include special characters");
  hasSpecials = input;
  return input;
}

//function to generate random number
function getRandomInt(number) {
  return Math.floor(Math.random() * Math.floor(number));
}

function generatePassword(){
  //declaring variable to store password
  let randomPassword = "";
  //calling pop-up functions
  askLengthPassword();
  askLowerCase();
  askUpperCase();
  askNumeric();
  askSpecials();

  //condition if none of criteria is chosen
  if(!(hasSpecials || hasUpperCase || hasLowerCase || hasNumeric)){
    alert("Please choose at least one criteria");
    return;
  }
  
  //declaring empty array to store all possible values
  let emptyArr = [];

  //if user chooses numeric values, add them to emptyArr
  if(hasNumeric){
    emptyArr = emptyArr.concat(numbers);
  }

  if(hasLowerCase){
    emptyArr = emptyArr.concat(lowerCaseLetters);
  }

  if(hasUpperCase){
    emptyArr = emptyArr.concat(upperCaseLetters);
  }

  if(hasSpecials){
    emptyArr = emptyArr.concat(specials);
  }

  //shuffle array
  emptyArr.sort(() => Math.random() - 0.5);

  //loop through emptyArr and by choosing random index, store random character in variable
  for(let i = 0; i < passwordLength; i++){
    randomPassword = randomPassword + emptyArr[getRandomInt(emptyArr.length)];
  }
  return randomPassword;
}