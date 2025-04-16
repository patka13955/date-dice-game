const questions = [
  "If you could switch lives with any movie character for one day, who would it be and why?",
  "What’s one trait you’d like someone to remember about you after a first meeting?",
  "If you could have a superpower that only worked one day a year, what would it be and what would you do with it?",
  "What’s something funny or weird you did as a kid that you can laugh about now?",
  "Imagine you could drink a ‘truth serum’ that guarantees 100% honesty — what question would you ask, and to whom?",
  "If your life had to be summed up with one quote, what would it be?"
];

document.getElementById("rollButton").addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceResult").textContent = `🎲 You rolled: ${roll}`;
  document.getElementById("questionBox").textContent = questions[roll - 1];
});
