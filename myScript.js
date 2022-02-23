let myNumber = Math.trunc(Math.random() * 100 + 1);
console.log(myNumber);

let userNumber = document.querySelector("#sayı");
let maxNumber = 100;
let minNumber = 1;
let myButton = document.querySelector("#check");
let i = 0;

let resim = document.querySelector('.img');


myButton.addEventListener("click", () => { 
    i++;    
    if (+userNumber.value < myNumber ) 
    {      
      minNumber = +userNumber.value;
      
      document.getElementById("count-span").innerText = i;
      if ( myNumber - (+userNumber.value) <= 5) {
        document.getElementById(
          "ikaz"
        ).innerText = `So close!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;        
      }
      else if ( myNumber - (+userNumber.value) <= 10) {
        document.getElementById(
          "ikaz"
        ).innerText = `You are close the number!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;        
      }
      else if ( myNumber - (+userNumber.value) <= 20) {
        document.getElementById(
          "ikaz"
        ).innerText = `We believe you!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;        
      }
      else {
        document.getElementById(
          "ikaz"
        ).innerText = `Hurry Up!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;        
      }  
    }
     
    else if (+userNumber.value > myNumber) 
    {
      maxNumber = +userNumber.value;
      
      document.getElementById("count-span").innerText = i;
      if ((+userNumber.value) - myNumber <= 5) {
        document.getElementById(
          "ikaz"
        ).innerText = `On the line man!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;
      }
      else if ((+userNumber.value) - myNumber <= 10) {
        document.getElementById(
          "ikaz"
        ).innerText = `Come on!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;
      }
      else if ((+userNumber.value) - myNumber <= 20) {
        document.getElementById(
          "ikaz"
        ).innerText = `You are on the way!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;
      }
      else {
        document.getElementById(
          "ikaz"
        ).innerText = `Hurry up!!!
        Enter a number between 
        ${minNumber} and ${maxNumber}`;
      }
      
      
    } 
    else if (+userNumber.value == myNumber) 
    {
      resim.style.display = 'block';      
      document.getElementById("ikaz").innerText = ` Congratulations...
      You win at your ${i}. attempt!`;
      document.getElementById("count-span").innerText = i;
      
    }  
});









// let myNumber = Math.floor((Math.random() * 100) + 1);
// console.log(myNumber)

// let userNumber = document.querySelector("#sayı");

// console.log(userNumber);

// function oyun(){
//     for (let i=1; i=10; i++)
//     {
//         if (userNumber < myNumber)
//         {
//             document.getElementById("ikaz").innerHTML =
//             "Enter a number between " + userNumber + "and 100.";
//             document.getElementById("count-span").innerHTML =
//             i;
//         }
//         if (myNumber < userNumber)
//         {
//             document.getElementById("ikaz").innerHTML =
//             "Enter a number between " + myNumber + "and 100.";
//             document.getElementById("count-span").innerHTML =
//             i;
//         }
//     }}
//     oyun();
