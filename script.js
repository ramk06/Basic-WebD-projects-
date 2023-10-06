const lowercaseLetters="abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbol="!@#$%^&*(){}|\/?,.|<>";

const length1 =document.getElementById("length");
const lowercaseE1 =document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numberE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordE1 = document.getElementById("password");

generateBtn.addEventListener("click",function(){

    const length= length1.value;
    let characters="";
    let password="";

    if(lowercaseE1.checked){
        characters += lowercaseLetters;
    }
    if(uppercaseE1.checked){
        characters += uppercaseLetters;
    }
    if(numberE1.checked){
        characters += numberE1;
    }
    if(symbolsE1.checked){
        characters += symbolsE1;
    }

    for(let i=0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }

    passwordE1.value=password;

})



