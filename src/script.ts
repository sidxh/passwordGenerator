
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genButEl = document.getElementById("genBut-el") as HTMLElement;
let passDiv1El = document.getElementById("passDiv1") as HTMLElement;
let passDiv2El = document.getElementById("passDiv2") as HTMLElement;


function resetPassword(){
    passDiv1El.textContent = ""
    passDiv2El.textContent = ""
}


function generatePassword(){
    
    resetPassword()

    for (let i =0; i<15; i++){

    let password1 = Math.floor(Math.random()*characters.length)

    let password2 = Math.floor(Math.random()*characters.length)

    passDiv1El.textContent += characters[password1]
    passDiv2El.textContent += characters[password2]

    }   
    
}