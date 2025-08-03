getComputerChoice = function () {
  let variable = Math.floor(Math.random() * 3);
  if (variable == 0) {
    return "rock";
  }
  if (variable == 1) {
    return "paper";
  }
  if (variable == 2) {
    return "scissor";
  }
};
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("enter choice 0,1 or2");
}
console.log(getHumanChoice());
