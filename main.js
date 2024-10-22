/* let firstName = "Benjamin";
let lastName = "Ndubuisi";
let FullName = "";
console.log(firstName + " " + lastName); */

/* function doStuff(){
    let myString = "Here is a string of text";
    let upperString = myString.toUpperCase();
    console.log(myString);
    console.log(upperString); 
}
doStuff();

function upperMessage(message){
    let upper = message.toUpperCase();
    console.log(upper);
}
upperMessage("How are you doing today");


function addition(num1, num2){
    let sum = num1 + num2;
    console.log(sum)
}
addition(4,3);

function checker(){
    let checknum = prompt("Please enter a valid number", "");
    if(checknum <= 10){
        console.log("Your number is valid");
    }else if(checknum > 10){
        console.log("Your number is above 10");
    }else(checknum >= 15)
        console.log("you are out of the game");
    
}
checker()


/* let minValue = 5;
let maxValue = 10;
let randomValue = minValue - maxValue + 1;

function myrandomNumber(){
   let randomNum = Math.random();
   let randomVal = randomValue * randomValue;
   let roundedRandomVal = Math.floor(randomVal);
   let finalNum = minValue + roundedRandomVal;

   console.log(finalNum);

}
myrandomNumber() */     
let names = ['Barbz', 'Kenny', 'Ben', 'Amaka']

function randomInt(min, max){

    let numOfValues = max - min + 1;
    let randomNum = Math.random();
    let randomVal = randomNum * numOfValues;
    let roundedRandomVal = Math.floor(randomVal);
    let finalNum = min + roundedRandomVal;

    return finalNum;

}

console.log(names[randomInt(0,3)]);