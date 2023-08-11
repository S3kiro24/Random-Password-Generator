// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // password caracteristics
  var numbers = '1234567890'
  var specialchar = '!@#$%^&*()_+}{":<>?,./;'
  var Letters = Array.from(Array(26)).map( (_, i) => i + 97);
  var lowerCase = Letters.map(code => String.fromCharCode(code));
  var upperCase = lowerCase.map(letter => letter.toUpperCase());

  // password length
  var passwordLength = prompt('Please add a password length (between 8 and 128.):')
  passwordLength = parseInt(passwordLength)
  
  // validating password length
  if (typeof passwordLength !== "number" || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a valid number between 8 and 128.");
    return "";
}

  const includeNumbers = confirm('does it include numbers?')
  const includeSymblos = confirm('does it include special characters?')
  const includeLowercase = confirm('does it include lowercase?')
  const includeUppercase = confirm('does it include uppercase?')
  
  // validates that at least one character is selected
if (!includeNumbers && !includeSymblos && !includeLowercase && !includeUppercase) {
  alert('You must select at least one Character.');
  return;
}

  var All = '';
  if (includeLowercase) All += lowerCase;
  if (includeUppercase) All += upperCase;
  if (includeNumbers) All += numbers;
  if (includeSymblos) All += specialchar;
  

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomindex = Math.floor(Math.random() * All.length);
    generatedPassword += All.charAt(randomindex);
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
