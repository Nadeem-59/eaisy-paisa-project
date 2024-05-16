#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let balance = 2000;
let name = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "What is your name?"
});
console.log((0, chalk_1.default)(`\t------------------------ Hello! ${name.name} 👋 Welcome To My Easy Paisa 📱 App ------------------------\t`));
let ask = await inquirer_1.default.prompt({
    type: "list",
    name: "operation",
    message: "What would you like to do?",
    choices: ["Transfer Money", "Receieve Money", "Pay Bill", "Cashbacks", "Easy Paisa Bundles", "Exit",]
});
if (ask.operation === "Transfer Money") {
    let transfer = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "transfer",
            message: "How much would you like to transfer?"
        },
        {
            type: "input",
            name: "transfernum",
            message: `To whom You Want To Send This Money. \n Enter Number`
        }
    ]);
    if (transfer.transfernum.length >= 11) {
        if (transfer.transfer > balance) {
            console.log("Insufficient Balance");
        }
        else {
            balance -= transfer.transfer;
            console.log(`After Transfering ${transfer.transfer} \n Your Updated Balance Is ${balance}`);
        }
    }
    else {
        console.log("Invalid Number");
    }
}
else if (ask.operation === "Receieve Money") {
    let receieve = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "receieve",
            message: "How much would you like to Receieve?"
        },
        {
            type: "input",
            name: "receievenum",
            message: `From whom You Want To Get This Money. \n Enter Number `
        }
    ]);
    if (receieve.receievenum >= 11) {
        if (receieve.receieve > balance) {
            console.log("Insufficient Balance");
        }
        else {
            balance += receieve.receieve;
            console.log(`\nAfter Receieving ${receieve.receieve} Your Updated Balance Is ${balance}`);
        }
    }
    else {
        console.log("Invalid Number");
    }
}
else if (ask.operation === "Pay Bill") {
    let bill = await inquirer_1.default.prompt({
        name: "bill",
        type: "list",
        choices: ["Electricity", "Gas", "Water", "Internet"]
    });
    if (bill.bill === "Electricity") {
        let ask = await inquirer_1.default.prompt({
            name: "ask",
            type: "list",
            choices: ["KE", "KE", "KE", "KE"]
        });
        if (ask.ask === "KE") {
            let ask1 = await inquirer_1.default.prompt({
                name: "ask1",
                type: "input",
                message: "Enter Meter/Account Number"
            });
            if (ask1.ask1.length >= 11) {
                console.log("Your Bill is 2500.\n");
                if (2500 > balance) {
                    console.log("Insufficient Balance");
                }
                else {
                    balance -= 2500;
                    console.log(`After paying bill of 2500 \n Your Updated Balance Is ${balance}`);
                }
            }
            else {
                console.log("Invalid Number");
            }
        }
    }
    else if (bill.bill === "Gas") {
        let ask = await inquirer_1.default.prompt({
            name: "ask",
            type: "list",
            choices: ["SUI", "SUI", "SUI", "SUI"]
        });
        if (ask.ask === "SUI") {
            let ask1 = await inquirer_1.default.prompt({
                name: "ask1",
                type: "input",
                message: "Enter Meter/Account Number"
            });
            if (ask1.ask1.length >= 11) {
                console.log("Your Bill is 970.\n");
                if (970 > balance) {
                    console.log("Insufficient Balance");
                }
                else {
                    balance -= 970;
                    console.log(`After paying bill of 970 \n Your Updated Balance Is ${balance}`);
                }
            }
            else {
                console.log("Invalid Number");
            }
        }
        else if (bill.bill === "Water") {
        }
        else if (bill.bill === "Internet") {
        }
        else {
            console.log("Invaild");
        }
    }
    else if (bill.bill === "Water") {
        let ask = await inquirer_1.default.prompt({
            name: "ask",
            type: "list",
            choices: ["KWSB", "KWSB", "KWSB", "KWSB"]
        });
        if (ask.ask === "KWSB") {
            let ask1 = await inquirer_1.default.prompt({
                name: "ask1",
                type: "input",
                message: "Enter Account Number"
            });
            if (ask1.ask1.length >= 11) {
                console.log("Your Bill is 250.\n");
                if (250 > balance) {
                    console.log("Insufficient Balance");
                }
                else {
                    balance -= 250;
                    console.log(`After paying bill of 250 \n Your Updated Balance Is ${balance}`);
                }
            }
            else {
                console.log("Invalid Number");
            }
        }
    }
    else if (bill.bill === "Internet") {
        let ask = await inquirer_1.default.prompt({
            name: "ask",
            type: "list",
            choices: ["PTCL", "PTCL", "PTCL", "PTCL"]
        });
        if (ask.ask === "PTCL") {
            let ask1 = await inquirer_1.default.prompt({
                name: "ask1",
                type: "input",
                message: "Enter Account Number"
            });
            if (ask1.ask1.length >= 11) {
                console.log("Your Bill is 3500.\n");
                if (3500 > balance) {
                    console.log("Insufficient Balance");
                }
                else {
                    balance -= 3500;
                    console.log(`After paying bill of 3500 \n Your Updated Balance Is ${balance}`);
                }
            }
            else {
                console.log("Invalid Number");
            }
        }
    }
}
else if (ask.operation === "Cashbacks") {
    let percent = 0.2 * balance;
    console.log(`Your Cash Back Is ${percent}`);
}
else if (ask.operation === "Easy Paisa Bundles") {
    console.log("For Now I Havent Added Any Bundles");
}
else if (ask.operation === "Exit") {
    console.log(" \n Exiting......................................... ");
}
else {
    console.log("Invalid hai nallay");
}
