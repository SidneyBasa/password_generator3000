// Major contributor of code provided by T.N UW Coding Bootcamp tutor
// Wednesday December 21, 2022 3:43pm

// global variables
var global_string = "";
var parameter0;
var parameter1;
var parameter2;
var parameter3;
var parameter4;

var string1;
var string2;
var string3;
var string4;

var newPassword = "";

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



// Pseudocode December 22, 2022
// 1. User loads webpage, a card loads with a generate button.
// 2. User clicks generate button to a series of prompts.
//
// 3. User is asked to choose the length of password 1 through 128.
//     > A prompt will appear saying:
//     > Parameter 1 of 5: Please enter a number greater than 0 but less than 128.
//               > There will be a button that says submit.
//               > There will be a button to cancel.
//     > The user must enter an integer
//     > If the integer is less than 1, reply number must be greater than 0
//              > Then a new prompt will occur saying,:
//                "Please enter a number greater than 0."
//               > There will be a button that says submit.
//               > There will also be a button to cancel.
//     > If the integer is greater than 128, reply:
//               > Then a new prompt will occur saying:
//                 "Please enter a number less than 128."  
//               > There will be a button that says submit.                
//               > There will also be a button to cancel.
//
// 4. The second prompt will occur saying:
//       > "Parameter 2 of 5: Would you like the password to have lower case characters?"
//               > There will be a button that says yes.                
//               > There will also be a button to no.
// 
// 5. The third prompt will occur saying:
//       > Parameter 3 of 5: Would you like the password to include upper case characters?
//               > There will be a button that says yes.                
//               > There will also be a button to no.
//             
// 6. The fourth prompt will occur saying:
//        > Parameter 4 of 5: Would you like the password to include numeric characters?
//               > There will be a button that says yes.                
//               > There will also be a button to no.
// 
// 7. The fifth prompt will occur saying:
//         > Parameter 5 of 5: Would you like the password to include special characters?
//               > There will be a button that says yes.                
//               > There will also be a button to no.
// 
// 8. There will be a prompt saying:
//         > "5 passwords parameters received, start generating password?"
//               > There will be a button that says yes.                
//               > There will also be a button to cancel.
//
// 9. The variable that stores the data will be in an array.
//          > var parameters = [];
//            parameter0 = integer; // number of characters in passwrd
//            parameter1 = boolean; // lower case
//            parameter2 = boolean; // upper case
//            parameter3 = boolean; // numbers
//            parameter4 = boolean; // special characters
//
// 10. There will be a new function called: generate_password
//           > password_length will receive parameter0
//           
// 11. A series of if statements will add characters to the global_string variable
//           > If all 4 parameters are checked true
//           > All strings will be added to the global_string variable
//
// 12. 

// Processing the new password

// // number of characters
// parameter0 = prompt("How many characters would you like this password to contain?") 


console.log(global_string)

// generate password function
// Code assistance by T.N UW Coding Bootcamp tutor
// December 21, 2022 @ 3:58pm US Pacific
function generatePassword(){

  string1 = "abcdefghijklmnopqrstuvqxqz"
  // Add when parameter1 is true
  
  string2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // Add when parameter2 is true
  
  string3 = "1234567890"
  // Add when parameter3 is true
  
  string4 = "!@#$%^&*°()_+-=[]/<>|'?"
  // Add special characters when parameter4 is true

  // Prompt pop up box series 
  parameter0 = prompt("How many characters would you like this password to contain?") 
  console.log("value of parameter0", parameter0)  
  if (parameter0 == 0) {
      console.log("parameter0, no entry detected")
      alert("Alert\nNo entry detected.\nPlease enter the length in numbers you want the password to be.\nTo try again click generate.")
      return;
    }

  parameter1 = confirm("Do you want this password to contain lower case?")
  console.log("Value of parameter1", parameter1)
  if (parameter1 == false){
    console.log("Password will not contain lower case letters.")
    alert("Password will not contain lower case letters.")
  }

  parameter2 = confirm("Do you want this password to contain upper case?")
  console.log("Value of parameter2", parameter2)
  if (parameter2 == false){
    console.log("Password will not contain upper case letters.")
    alert("Password will not contain upper case letters.")
  }

  parameter3 = confirm("Do you want this password to contain numbers?")
  console.log("Value of parameter3", parameter3)
  if (parameter3 == false){
    console.log("Password will not contain numbers.")
    alert("Password will not contain numbers")
  }

  parameter4 = confirm("Do you want this password to contain special characters?")
  console.log("Value of parameter41", parameter4)
  if (parameter4 == false){
    console.log("Password will not contain characters.")
    alert("Password will not contain characters.")
  }

  // Concatenate
  // A string appends additional strings with the plus equals operator +=

  if (parameter1 == true){
    global_string += string1
  }

  if (parameter2 == true){
    global_string += string2
  }

  if (parameter3 == true){
    global_string += string3
  }

  if (parameter4 == true){
    global_string += string4
  }

  // looping through the global string
  // Code asssitance provided by T.N
for(var i = 0; i < parameter0; i++) {
    var index = Math.floor(Math.random() * global_string.length);
    var passwordValue = global_string[index];
    
    // console.log(index)
    // console.log(passwordValue)
    newPassword += passwordValue;
    // console.log(newPassword)

  }

  return newPassword
  
 }

