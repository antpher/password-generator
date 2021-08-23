// Assignment code here
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~"];

let passwordLength;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;
let userChoices;

// Password generator function
function generatePassword () {
  passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128.");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("You must enter a value.");

  } else if (passwordLength < 8 || passwordLength >128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);

  } else {
    confirmLower = confirm("Will your password contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will your password contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will your password contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will your password contain special characters?");
    console.log("Special character " + confirmSpecial);
  };

  // No answer
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose at least one criteria.");


    // 4 true
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }

  // 3 true
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }

  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }

  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }

  else if (confirmUpper && confirmNumber && ConfirmSpecial) {
    userChoices = uppercase.concat(numbers, special);
    console.log(userChoices);
  }

  // 2 true
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }

  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }

  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }

  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }

  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }

  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }

  // 1 true
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }

  else if (confirmUpper) {
    userChoices = upperCase;
    console.log(userChoices);
  }

  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }

  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  }

  // Empty variable for the password length
  let passwordBlank = [];
  
  // Loop for random selection
  for (let i = 0; i < passwordLength; i++) {
    let allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }
  
  // Join and return the password
  let password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
    
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);