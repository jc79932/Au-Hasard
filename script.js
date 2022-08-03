
//TODO Add alert boxes warning none selected
//Slider code
var slider = document.getElementById("slider-value");
var output = document.getElementById("slider-value-output");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}
//Copy Paste code
var clipboardMessage = document.getElementById("clipboard-opacity")
function copyPaste() {
  var grabText = document.getElementById("password");
  grabText.select();
  grabText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(grabText.value);
  // alert("Copied password to clipboard. " + grabText.value);
  clipboardMessage.style.opacity = 1;
  for(let i=0; i<1000; i++){
    
    clipboardMessage.style.opacity = clipboardMessage.style.opacity - 0.001;
    setTimeout(1000);
    console.log(clipboardMessage.style.opacity);
  }
}
// Assignment code here
let Lc = document.getElementById("lc"); 
let Uc = document.getElementById("uc");
let Nc = document.getElementById("nc");
let Sc = document.getElementById("sc");
const combUc = 26 - 1;
const combLc = 52 - 1;
const combNc = 62 - 1;
const combSc = 92 - 1;


const combinations = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

let temp = 1;
let tempPassword = "";
let testSVal = slider.value;
console.log(combinations.charAt(Math.floor(Math.random() * 92) + 1));


function generatePassword(){
  let SVal = document.getElementById("slider-value-output").innerHTML;
  tempPassword = "";
  console.log(SVal);
  for (let i=0; i<SVal;i++){
    temp = Math.floor(Math.random() * 92) + 1;
    console.log(temp);
    if ((Uc.checked==true) && (temp<=combUc)){
      tempPassword = tempPassword + combinations.charAt(temp);
      
    } else if ((Lc.checked==true) && (temp<=combLc) && (temp>combUc)){
      tempPassword = tempPassword + combinations.charAt(temp);
      
    } else if ((Nc.checked==true) && (temp<=combNc) && (temp>combLc)){
      tempPassword = tempPassword + combinations.charAt(temp);
      
    } else if ((Sc.checked==true) && (temp<=combSc) && (temp>combNc)){
      tempPassword = tempPassword + combinations.charAt(temp);
      
    } else if ((Uc.checked==false) && (Lc.checked==false) &&(Nc.checked==false) &&(Sc.checked==false)){
      window.alert("Please select at least one of the criteria.")
      break;
    } else {
        i--;
      }
      console.log(tempPassword);
    }
  
  return tempPassword;
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
