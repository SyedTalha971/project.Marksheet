#! /usr/bin/env node 

import inquirer from "inquirer";

let totalMarks = 500

let answer = await inquirer.prompt ([
    {
        name : "biology",
        message:"Enter your Biology marks :",
        type : "number"
    },
    {
        name : "chemistry",
        message:"Enter your Chemistry marks :",
        type : "number"
    },
    {
        name : "physics",
        message:"Enter your Physics marks :",
        type : "number"
    },
    {
        name : "math",
        message:"Enter your Math marks :",
        type : "number"
    },
    {
        name : "urdu",
        message:"Enter your Urdue marks :",
        type : "number"
    },
])
let totalNumbers =answer.biology+answer.chemistry+answer.physics+answer.math+answer.urdu;

let percentage = totalNumbers / totalMarks * 100

console.log(`-----------------------------`)
console.log(`-----------------------------`) 
console.log(`Your Biology Number is ${answer.biology}/100`);
console.log(`Your Chemistry Number is ${answer.chemistry}/100`);
console.log(`Your Physics Number is ${answer.physics}/100`);
console.log(`Your Math Number is ${answer.math}/100`);
console.log(`Your Urdu Number is ${answer.urdu}/100`);


console.log(`-----------------------------`) 
console.log ("Your Mark Sheet is generating") 
console.log ("-----------------------------")
console.log ("-----------------------------")
console.log ("Your obtained marks is here")
console.log (`Obtained Marks = ${totalNumbers} / ${totalMarks}`)
console.log ("-----------------------------")
console.log ("Your Percentage is here")
console.log (`Your percentage = ${percentage}`)
console.log ("-----------------------------")
console.log ("Your Grade is here")
if (percentage>= 90 ) {
    console.log(`Your grade is "A+1"`)
}else if (percentage>= 80 ) {
    console.log(`Your grade is "A1"`)
}else if (percentage>= 70 ) {
    console.log(`Your grade is "A"`)
}else if (percentage>= 60 ) {
    console.log(`Your grade is "B"`)
}else if (percentage>= 50 ) {
    console.log(`Your grade is "C"`)
}else if (percentage>= 40 ) {
    console.log(`Your grade is "D"`)
}else if (percentage>= 33 ) {
    console.log(`Your grade is "E"`)
}else {console.log(`"You are Fail!"`)
}
console.log ("-------------")
console.log ("by Syed Talha")
console.log ("-------------")
