const upgrade1CostDisplay = document.getElementById('upgradecost1');
const upgrade2CostDisplay = document.getElementById('upgradecost2');
const upgrade3CostDisplay = document.getElementById('upgradecost3');
const upgrade4CostDisplay = document.getElementById('upgradecost4');
const upgrade1Button = document.getElementById('upgrade1-button');
const upgrade2Button = document.getElementById('upgrade2-button');
const upgrade3Button = document.getElementById('upgrade3-button');
const upgrade4Button = document.getElementById('upgrade4-button');
const currencyDisplay = document.getElementById('currency');

let currency = 0;
const costIncreaseFactor = 1.2;

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
  
