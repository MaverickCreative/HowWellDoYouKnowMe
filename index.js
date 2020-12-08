/**
 * Simple Quiz App
 */

var chalk = require("chalk");
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question(chalk.bold("What is your name? "));
console.log(
  chalk.bold(
    chalk.green(
      "Welcome to Anurag's repl " +
        userName +
        " :). You will be asked some interesting question's about myself :p. Let's see how well do you know me.\n"
    )
  )
);

console.log(chalk.bold("<--Instructions-->\n"));
console.log(chalk.bold("The Quiz will have a total of 5 questions.\n"));
console.log(
  chalk.bold(
    "For each correct answer you will be awarded 2 points and no points will be awarded for any incorrect answer.\n"
  )
);
console.log(chalk.bold("Hope you enjoy the quiz ahead!\n"));

var questions = [
  {
    question: "1.) What's my nick name ?",
    options: ["Anuj", "Bittu", "Aashu", "Chotu"],
    answer: 1,
    elaborateAnswer: "My nickname is Anuj 😛.",
  },
  {
    question: "2.) Whom do I fear more ?",
    options: ["Sister", "Dad", "Mom", "No one"],
    answer: 3,
    elaborateAnswer: "My mom obviously 🙏",
  },
  {
    question: "3.) What's my favorite junk food ?",
    options: ["Pizza", "Burger", "Fries", "Vada Pav"],
    answer: 2,
    elaborateAnswer: "Burger 😋",
  },
  {
    question: "4.) What's the book I am currently reading ?",
    options: ["Ikigai", "Think & Grow Rich", "Atomic Habits", "The Mindset"],
    answer: 3,
    elaborateAnswer: "Atomic Habits by James Clear ❤",
  },
  {
    question: "5.) What's one vegetable that I absolutely dislike ?",
    options: ["Cauliflower", "Ladies Finger", "Spinach", "Bottle Gourd"],
    answer: 2,
    elaborateAnswer: "Ladies Finger 🥴",
  },
];

questions.forEach((que) => {
  console.log(chalk.bold.bgYellow(que.question));
  var chosenOption = readlineSync.keyInSelect(
    que.options,
    chalk.bold("Which option ?")
  );
  if (chosenOption + 1 === que.answer) {
    score += 2;
    console.log(chalk.bold(chalk.green("Hurray!!! You got it right :)")));
    console.log(chalk.bold("Your current score is: " + score));
  } else {
    console.log(chalk.bold(chalk.red("Oops!!! You got that wrong :(")));
    var ans = "option" + que.answer;
    console.log(chalk.bold("The correct answer is " + que.elaborateAnswer));
    console.log(chalk.bold("Your score remains: " + score));
  }
  console.log("----------------------------");
});

console.log(chalk.bold("You scored a total of: " + score));
console.log("\n");
console.log(
  chalk.bold(
    "Well if you have come this far, great!!! I hope you liked it and if you would like to know me more or would like to share constructive criticism you can follow me on Twitter @geraltviari and I will also follow you back. P.S. I also make memes :P\n"
  )
);

console.log(chalk.bold("Thank you."));
