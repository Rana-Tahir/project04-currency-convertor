import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.92,
    INR: 83.25,
    GBP: 0.79,
    JPY: 151.8,
    KWD: 0.307,
    SAR: 3.75,
    PKR: 278,
};

console.log(chalk.magenta(`\n\t Welcome to Currency Converter\n`))

let user_answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: chalk.greenBright("Enter from currency"),
        choices: ['USD','EUR','GBP','JPY','KWD','SAR','PKR','INR']
    },
    {
        type: "list",
        name: "to",
        message: chalk.greenBright("Enter to currency"),
        choices: ['USD','EUR','GBP','JPY','KWD','SAR','PKR','INR']
    },
    {
        type: "input",
        name: "amount",
        message: chalk.greenBright("Enter the amount you want to convert")
    }
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
