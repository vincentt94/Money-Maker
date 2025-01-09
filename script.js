
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


let currency = 0;
const costIncreaseFactor = 1.2;

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


let upgradeCosts = {
    upgrade1: 200,
    upgrade2: 1000,
    upgrade3: 2000,
    upgrade4: 500,
  };

  function updateDisplay() {
      upgrade1CostDisplay.textContent = upgradeCosts.upgrade1;
      upgrade2CostDisplay.textContent = upgradeCosts.upgrade2;
      upgrade3CostDisplay.textContent = upgradeCosts.upgrade3;
      upgrade4CostDisplay.textContent = upgradeCosts.upgrade4;
      currencyDisplay.textContent = currency;
  }


  function buyUpgrade(upgrade) {
    // Check if the player has enough currency
    if (currency >= upgradeCosts[upgrade]) {
    // Deduct the cost of the upgrade
        currency -= upgradeCosts[upgrade]; 
    // Increase the cost
        upgradeCosts[upgrade] = Math.floor(upgradeCosts[upgrade] * costIncreaseFactor);

    // Message to show purchase was successful, and the new upgrade cost
        upgrade1count[upgrade]++;
        const message1 = `You have hired ${upgrade1count} Workers! Upgrade cost increase to: ${upgradeCosts.upgrade1}`;
        upgrade1Button.textContent = message1;
        
      updateDisplay();

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
  
