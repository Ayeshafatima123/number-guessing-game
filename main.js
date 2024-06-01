import inquirer from "inquirer";
const ramdamnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguesssnumber",
        type: "number",
        message: "Please guess a number between 1-10",
    },
]);
console.log(answer);
if (answer.userguesssnumber === ramdamnumber) {
    console.log("congratualation! you guessed right number. ");
}
else {
    console.log("you guessed wrong number.");
}
