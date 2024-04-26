#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";


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

console.log(chalk.blueBright(`-----------------------------`))
console.log(chalk.blueBright(`-----------------------------`))
console.log(chalk.green(`Your Biology Number is ${answer.biology}/100`));
console.log(chalk.green(`Your Chemistry Number is ${answer.chemistry}/100`));
console.log(chalk.green(`Your Physics Number is ${answer.physics}/100`));
console.log(chalk.green(`Your Math Number is ${answer.math}/100`));
console.log(chalk.green(`Your Urdu Number is ${answer.urdu}/100`));


console.log(chalk.blueBright(`-----------------------------`)) 
console.log (chalk.green("Your Mark Sheet is generating")) 
console.log (chalk.blueBright("-----------------------------"))
console.log (chalk.blueBright("-----------------------------"))
console.log (chalk.green("Your obtained marks is here"))
console.log (chalk.green(`Obtained Marks = ${totalNumbers} / ${totalMarks}`))
console.log (chalk.blueBright("-----------------------------"))
console.log (chalk.green("Your Percentage is here"))
console.log (chalk.green(`Your percentage = ${percentage}`))
console.log (chalk.blueBright("-----------------------------"))
console.log (chalk.green("Your Grade is here"))
if (percentage>= 90 ) {
    console.log(chalk.yellow(`Your grade is "A+1"`))
}else if (percentage>= 80 ) {
    console.log(chalk.yellow(`Your grade is "A1"`))
}else if (percentage>= 70 ) {
    console.log(chalk.yellow(`Your grade is "A"`))
}else if (percentage>= 60 ) {
    console.log(chalk.yellow(`Your grade is "B"`))
}else if (percentage>= 50 ) {
    console.log(chalk.yellow(`Your grade is "C"`))
}else if (percentage>= 40 ) {
    console.log(chalk.yellow(`Your grade is "D"`))
}else if (percentage>= 33 ) {
    console.log(chalk.yellow(`Your grade is "E"`))
}else {console.log(chalk.redBright(`"You are Fail!"`))
}
console.log (chalk.blueBright("-------------"))
console.log (chalk.yellowBright("by Syed Talha"))
console.log (chalk.blueBright("-------------"))
