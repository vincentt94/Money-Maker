
const upgrade1CostDisplay = document.getElementById('upgradecost1');
const upgrade2CostDisplay = document.getElementById('upgradecost2');
const upgrade3CostDisplay = document.getElementById('upgradecost3');
const upgrade4CostDisplay = document.getElementById('upgradecost4');
const upgrade1Button = document.getElementById('upgrade1-button');
const upgrade2Button = document.getElementById('upgrade2-button');
const upgrade3Button = document.getElementById('upgrade3-button');
const upgrade4Button = document.getElementById('upgrade4-button');
const currencyDisplay = document.getElementById('currency');

const generateEl = document.getElementById('generate');
const counterEl = document.getElementById('counter');


let currency = 100000;
const costIncreaseFactor = 1.5;

// All upgrades start at 0, and increase based on purchase.
let upgrade1count = 0;
let upgrade2count = 0;
let upgrade3count = 0;
let upgrade4count = 0;

//updates the users total money count 
function totalText() {
    counterEl.textContent = currency;
};
// increases total money by 1 for each click
generateEl.addEventListener('click', function () {
    currency++;
    totalText();
});

//BEGINNING BUTTON BEHAVIOR 
let clickValue = 1;
let multiplier = 1; 

//UPGRADE EFFECTS
let upgradeCosts = {
    upgrade1: {cost: 100, maxPurchases: 5, purchasesMade: 0, multiplier: 1},
    upgrade2: {cost: 1000, maxPurchases: 4, purchasesMade: 0, multiplier: 1},
    upgrade3: {cost: 2000, maxPurchases: 3, purchasesMade: 0, multiplier: 1},
    upgrade4: {cost: 500, maxPurchases: 5, purchasesMade: 0, clickValue: 1},
  };

  //SHOWS CURRENT  PRICE OF EACH UPGRADE AND UPDATES CURRENT MONEY SHOWN
  function updateDisplay() {
      upgrade1CostDisplay.textContent = upgradeCosts.upgrade1.cost.toFixed(0);
      upgrade2CostDisplay.textContent = upgradeCosts.upgrade2.cost.toFixed(0);
      upgrade3CostDisplay.textContent = upgradeCosts.upgrade3.cost.toFixed(0);
      upgrade4CostDisplay.textContent = upgradeCosts.upgrade4.cost.toFixed(0);
      currencyDisplay.textContent = currency;
  }
//check to see if player has enough money to buy said upgrade and if there are any upgrades left
  function canBuyUpgrade(upgrade) {
    return currency >= upgradeCosts[upgrade].cost && upgradeCosts[upgrade].purchasesMade < upgradeCosts[upgrade].maxPurchases;
  }
//buy a upgrade
  function buyUpgrade(upgrade) {
    if (canBuyUpgrade(upgrade)) {
//total currency subtracted by the cost  of upgrade
    currency -= upgradeCosts[upgrade].cost; 
//increase the count to purchases made
    upgradeCosts[upgrade].purchasesMade++;
 // Apply the effects of the upgrade
 if (upgrade === 'upgrade1') {
    multiplier *= 1.5;} 
    else if (upgrade === 'upgrade2') {
      multiplier *= 2;}
    else if (upgrade === 'upgrade3') {
        multiplier *= 4;}
    else if (upgrade === 'upgrade4') {
        clickValue += 1;}

    // Increase the cost
        upgradeCosts[upgrade].cost = Math.floor(upgradeCosts[upgrade].cost * costIncreaseFactor);

    // Message to show purchase was successful, and the new upgrade cost
        upgrade1count[upgrade]++;
        const message1 = `You have hired ${upgradeCosts[upgrade].purchasesMade} Workers! Upgrade cost increase to: ${upgradeCosts[upgrade].cost}`;
        upgrade1Button.textContent = message1;
        
      updateDisplay();
      alert(`${upgrade} purchased!`);
    } else {
      alert("Not enough currency to buy this upgrade.");
    }
  }

  upgrade1Button.addEventListener('click', function() {
    buyUpgrade('upgrade1');
  });
  
  upgrade2Button.addEventListener('click', function() {
    buyUpgrade('upgrade2');
  });
  
  upgrade3Button.addEventListener('click', function() {
    buyUpgrade('upgrade3');
  });
  
  upgrade4Button.addEventListener('click', function() {
    buyUpgrade('upgrade4');
  });

    updateDisplay();
  
