const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordOne = document.getElementById("password-box-one")
const passwordTwo = document.getElementById("password-box-two")

function getRandomPassword() {
    let randomIndex = Math.floor( Math.random() * characters.length)
    return characters[randomIndex]
}

function renderPassword() {
    let passwordRandomOne = ""
    let passwordRandomTwo = ""
    for (let i = 0; i < 15; i++) {
        passwordRandomOne += getRandomPassword()
        passwordRandomTwo += getRandomPassword()
    }
    passwordOne.textContent = passwordRandomOne
    passwordTwo.textContent = passwordRandomTwo
}