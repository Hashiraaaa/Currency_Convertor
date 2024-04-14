#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Defining the list of currencies and their exhange rates
console.log(chalk.yellow("\n\t Welcome to HashTech Coding - Currency Convertor\n"));
let exchangeRate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.37,
    "AUD": 1.65,
    "PKR": 277.70 //Pakistani Rupee
};
let userAns = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency you want to convert into: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount too convert: ",
    }
]);
//Converting the currency formula
let from_amount = exchangeRate[userAns.from_currency];
let to_amount = exchangeRate[userAns.to_currency];
let amount = userAns.amount;
let base_amout = amount / from_amount;
let converted_amount = base_amout * to_amount;
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
