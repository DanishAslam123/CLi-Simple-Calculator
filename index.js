#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number",
        type: "number",
        name: "Firstnumber" },
    { message: "Enter your Second Number",
        type: "number",
        name: "Secondnumber" },
    { message: "Enter your Third Number",
        type: "number",
        name: "Thirdnumber" },
    { message: "Select One of the Operator to Perform Action",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
if (answer.Operator !== null && answer.Operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber + answer.Thirdnumber);
}
else if (answer.Operator !== null && answer.Operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber - answer.Thirdnumber);
}
else if (answer.Operator !== null && answer.Operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber * answer.Thirdnumber);
}
else if (answer.Operator !== null && answer.Operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber / answer.Thirdnumber);
}
