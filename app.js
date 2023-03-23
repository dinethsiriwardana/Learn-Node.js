//? readline module is used to read the input from the user
const readline = require("readline");

//? createInterface() method is used to create an interface
//? process is used to read the input/outdut from the user
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

r1.question(
  `What is ${num1} + ${num2} ? \n`,
  //? userinput is the input given by the user
  (userInput) => {
    // console.log(userInput);
    if (userInput.trim() == answer) {
      //? trim() is used to remove the white spaces
      r1.close();
    } else {
      r1.setPrompt("Incorrect response, please try again\n");
      r1.prompt(); //? prompt() is used to prompt the user again
      r1.on("line", (userInput) => { 
        //? this line event is used to read the input from the user again until the answer is wrong
        if (userInput.trim() == answer) {
          r1.close();
        } else {
          r1.setPrompt(
            `Your answer of ${userInput} is incorrect, please try again\n`
          );
          r1.prompt();
        }
      });
    }
  }
);

//? close event is used to close the interface
r1.on("close", () => {
  console.log("Correct Answer!");
});
