'use strict';
// To add counter of correct answer, I have used correctAnswer+=1
let correctAnswer=0
// This is for user name. 
let userName=prompt("What is your name"); 
alert("welcome to my website "+userName+" let us start ");

// This is for geuss color 
let myColor=prompt("is blue is my favirout color?");
myColor=myColor.toLowerCase();
if (myColor=="yes"|| myColor== "y") {
    alert("you are right");
    console.log("you are correct my faviroyt color is Blue");
    correctAnswer+=1
    
} else if(myColor=="no" || myColor== "n"){
    alert("that is not correct, my favirout color is black ");
    console.log("that is not correct, my favirout color is black ");
    
} else {
    alert("you made wrong insert, any way my favirout color is Blue");
    console.log("you made wrong insert, any way my favirout color is Blue");
}

// This is for geuss my age 
let Age=prompt("is 28 is my age?");
Age=Age.toLowerCase();
if (Age=="yes" || Age=="y") {
    alert("you are right");
    console.log("you are correct my age is 28");
    correctAnswer+=1
    
} else if(Age=="no" || Age=="n"){
    alert("that is not correct, I am 28 year old ");
    console.log("that is not correct,  I am 28 year old ");
    
} else {
    alert("you made wrong insert, any way I am 28 year old ");
    console.log("you made wrong insert, any way I am 28 year old ");
}

// This is for geuss my birthday place 
let placeB=prompt("Do I born in Iraq?");
placeB=placeB.toLowerCase() ;
alert(placeB)
if (placeB=="yes" || placeB== "y") {
    alert("NO, that is wrong. I was born in Oman");
    console.log("NO, that is wrong. I was born in Oman");
    
} else if(placeB=="no" || placeB== "n"){
    alert("that is correct, I was born in Oman ");
    console.log("that is correct, I was born in Oman ");
    correctAnswer+=1
    
} else {
    alert("you made wrong insert, anyway I was born in Oman ");
    console.log("you made wrong insert, anyway I was born in Oman ");
}

// This is for jordan capital
let Capital=prompt("is Amman Capital of Jordan?");
Capital= Capital.toLowerCase();
if (Capital=="yes" || Capital== "y") {
    alert("you are right");
    console.log("you are correct Amman is a capital of Jordan ");
    correctAnswer+=1
    
} else if(Capital=="no" || Capital== "n"){
    alert("that is not correct, Amman is a capital of Jordan");
    console.log("that is not correct,  Amman is a capital of Jordan");
    
} else {
    alert("you made wrong insert, anyway Amman is a capital of Jordan ");
    console.log("you made wrong insert, anyway Amman is a capital of Jordan ");
}

// This is for month
let month=prompt("do we in Ramadan?");
month=month.toLowerCase() ;
if (month=="yes" || month=="y") {
    alert("NO, that is wrong. Ramdan is the next month");
    console.log("NO, that is wrong. Ramdan is the next month");
    
} else if(month=="no" || month=="n"){
    alert("that is correct, Ramdan is the next month ");
    console.log("that is correct,  Ramdan is the next month ");
    correctAnswer+=1
    
} else {
    alert("you made wrong insert, anyway Ramdan is the next month ");
    console.log("you made wrong insert, anyway Ramdan is the next month ");
}
// 6th question Lab 03

let guss= prompt("Lets play togather. Give me anumber? and I will tell you if you match ");
let correctNum=5;
let i =1;
if (guss==correctNum){
    alert(`You made it from the first time. The correct number is ${correctNum}`);
    correctAnswer+=1
}

while ( i<5 && guss !=correctNum) {
    i+=1;
    if (guss>correctNum){
        alert("Your number is higher than the correct number");
    } else{     
        alert("Your number is Lower than the correct number");
    }
    guss= prompt("Lets tray again. Give me a number ");

    if (guss==correctNum){
        alert(`Finally You made it !. The correct number is ${correctNum}`);
        correctAnswer+=1
    }
}
if (i==5) {
    alert("You have consume all of your chance. The correct answer number is "+correctNum);
}

// 7th question Lab 03, guss belad alsham countries 

let s=0
let check=true
while (s<6 && check) {
    s+=1;
    let countries=['jordan','syria','lebanon','palestine'];
    let gussCountry=prompt("Guss arab country ");
    gussCountry=gussCountry.toLowerCase();

    for (let k=0 ; k<countries.length;k++){
        if (gussCountry== countries[k]){
            alert('you made it, the correct answers are '+countries);
            check=false;
            correctAnswer+=1
            break;            
        }
    }
    if(s==6){
        alert('You have cosumed all of your chance. However the correct answers are '+countries);

    }
}
// To add counter of correct answer, I have used correctAnswer+=1
alert(`Number of Your correct answer is: ${correctAnswer}`);
