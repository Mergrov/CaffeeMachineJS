let input = require('sync-input')
let water = 400;
let milk = 540;
let beans = 120;
let coins = 550;
let cups = 9;
function machineLog() { console.log(`The coffee machine has:\n${water} ml of water\n${milk} ml of milk\n${beans} g of coffee beans\n${cups} disposable cups\n${coins} of money\n`) }
function fill() {
  let addWasser = Number(input("Write how many ml of water you want to add:"))
  let addMilk = Number(input("Write how many ml of milk you want to add:"))
  let addBeans = Number(input("Write how many grams of coffee beans you want to add:"))
  let addCups = Number(input("Write how many disposable cups you want to add:"))
  water = water + addWasser;
  milk = milk + addMilk;
  beans = beans + addBeans;
  cups = cups + addCups;
}
function makeEspresso() {
  if (cups < 1) {
    console.log("Sorry, not enough cups!\n");
  }
  if (water < 250) {
     console.log("Sorry, not enough water!\n");
  }
  if (beans < 16) {
     console.log("Sorry, not enough beans!\n");
  }
  else{
  console.log("I have enough resources, making you a coffee!")
  cups = cups - 1;
  water = water - 250;
  beans = beans - 16;
  coins = coins + 4;
  }
}
function makeLatte() {
  if (cups < 1) {
    console.log("Sorry, not enough cups!\n");
  }
  if (water < 350) {
     console.log("Sorry, not enough water!\n");
    return;
  }
  if (beans < 20) {
     console.log("Sorry, not enough beans!\n");
  }
  if (milk < 75) {
    console.log("Sorry, not enough milk!\n");
  }
  else {
  console.log("I have enough resources, making you a coffee!")
  cups = cups - 1;
  water = water - 350;
  milk = milk - 75;
  beans = beans - 20;
  coins = coins + 7;
  }
}
function makeCappuccino() {
  if (cups < 1) {
    console.log("Sorry, not enough cups!\n");
  }
  if (water < 200) {
     console.log("Sorry, not enough water!\n");
    return;
  }
  if (beans < 12) {
     console.log("Sorry, not enough beans!\n");
  }
  if (milk < 100) {
    console.log("Sorry, not enough milk!\n");
  }
  else {
  console.log("I have enough resources, making you a coffee!")
  cups = cups - 1;
  water = water - 200;
  milk = milk - 100;
  beans = beans - 12;
  coins = coins + 6;
  }
}
function decisionMaker() {
  let option1 = input("Write action (buy, fill, take, remaining, exit):")
  return option1;
}
while (true) {
let option = decisionMaker()
switch(option){
  case "take":
  console.log(`I gave you $${coins}\n`);
  coins = 0;
    break;
  case "fill":
    fill();
    console.log("\n")
    break;
  case "remaining":
    machineLog();
    console.log("\n")
    break;
  case "exit":
    process.exit();
    case "buy":
     let cofeeOfChoice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
    switch(cofeeOfChoice){
      case "1":
        makeEspresso();
        break;
      case "2":
        makeLatte();
        break;
      case "3":
        makeCappuccino();
        break;
      case "back":
        break;
    }
     break;
}
}
