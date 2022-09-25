const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword=document.getElementById("generated-btn-1");
let secondPassword=document.getElementById("generated-btn-2");
;
let element=""
let element1=""
function passwordGetter() {
    passOne();
    passTwo();
    element1=""
    element=""
}
function passOne() {
    firstPassword.innerHTML=func1();
}
function passTwo() {
    secondPassword.innerHTML=func2();
}
function func1() {
    for (let i = 0; i < 15; i++) {
        let index=Math.floor(Math.random()*characters.length)
        element += characters[index];   
    }
    return element
}
function func2() {
    for (let i = 0; i < 15; i++) {
        let index=Math.floor(Math.random()*characters.length)
        element1 += characters[index];   
    }
    return element1
}


