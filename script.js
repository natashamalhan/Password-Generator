// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var allNumbers = "1234567890"
  var specialCharacters = "!@#$%^&*"
  var emptyString = ""
  var emptyString2 = ""
  var ifLower = confirm ("Would you like lowercase characters?") 
  var ifUpper = confirm ("Would you like uppercase characters?")
  var ifNumbers = confirm ("Would you like numbered characters?")
  var ifSpecial = confirm ("Would you like special characters?")
  if(!ifLower && !ifUpper && !ifNumbers && !ifSpecial){
    alert("Must choose at least 1 character type")
    return generatePassword()
  }
  var length = prompt ("How long would you like your password to be?")

  if(ifLower){
    emptyString += lowerCase
  }
  if(ifUpper){
    emptyString += upperCase
  }
  if(ifNumbers){
    emptyString += allNumbers
  }
  if(ifSpecial){
    emptyString += specialCharacters
  } 
  if(length<8 || length>128){
    alert("Must choose at least 8 characters and less than 128 characters")
    return generatePassword()
  }
for (let i = 0; i <length; i++) {
emptyString2 += emptyString.charAt(Math.floor(Math.random()*emptyString.length))
}
return emptyString2
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
