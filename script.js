
const upgrade1CostDisplay = document.getElementById('upgradecost1');
const upgrade2CostDisplay = document.getElementById('upgradecost2');
const upgrade3CostDisplay = document.getElementById('upgradecost3');
const upgrade4CostDisplay = document.getElementById('upgradecost4');
const upgrade1Button = document.getElementById('upgrade1-button');
const upgrade2Button = document.getElementById('upgrade2-button');
const upgrade3Button = document.getElementById('upgrade3-button');
const upgrade4Button = document.getElementById('upgrade4-button');
const generateEl = document.getElementById('generate');
const counterEl = document.getElementById('counter');

const moneyMulitplier = document.getElementById('moneypersec')

let currency = 5000000;
const costIncreaseFactor = 1.5;

//BEGINNING BUTTON BEHAVIOR 
let clickValue = 1;


//updates the users total money count 
function totalText() {
    counterEl.textContent = currency;
    moneyMulitplier.textcontent = totalAutoGen;
    generateEl.textContent = `$${clickValue}`;
};
// increases total money by 1 for each click
generateEl.addEventListener('click', function () {
    currency += clickValue;
    totalText();
});

upgrade4Button.addEventListener('click', function () {
    clickValue += 1;
    totalText();
});
//UPGRADE EFFECTS
let upgradeCosts = {
    upgrade1: {cost: 100, maxPurchases: 5, purchasesMade: 0, autoGen: 1,},
    upgrade2: {cost: 1000, maxPurchases: 4, purchasesMade: 0, autoGen: 5},
    upgrade3: {cost: 2000, maxPurchases: 3, purchasesMade: 0, autoGen: 10},
    upgrade4: {cost: 500, maxPurchases: 5, purchasesMade: 0, clickValue: 1}, //Not sure If autoGen is needed here, instead need to find a way to increase the currency++ to be currency +2,+5,etc.
};

//SHOWS CURRENT  PRICE OF EACH UPGRADE AND UPDATES CURRENT MONEY SHOWN
function updateDisplay() {
    upgrade1CostDisplay.textContent = upgradeCosts.upgrade1.cost.toFixed(0);
    upgrade2CostDisplay.textContent = upgradeCosts.upgrade2.cost.toFixed(0);
    upgrade3CostDisplay.textContent = upgradeCosts.upgrade3.cost.toFixed(0);
    upgrade4CostDisplay.textContent = upgradeCosts.upgrade4.cost.toFixed(0);
    updateTotalAutogenRate();
}



function updateTotalAutogenRate() {
    // Calculate the total autogen rate based on purchases
    let totalAutogenRate = 0;
    
    // Add up the rates for each upgrade, multiplying by the number of purchases
    totalAutogenRate += upgradeCosts.upgrade1.autoGen * upgradeCosts.upgrade1.purchasesMade;
    totalAutogenRate += upgradeCosts.upgrade2.autoGen * upgradeCosts.upgrade2.purchasesMade;
    totalAutogenRate += upgradeCosts.upgrade3.autoGen * upgradeCosts.upgrade3.purchasesMade;
    
    // Display the total autogen rate in the HTML
    document.getElementById('moneypersec').textContent = totalAutogenRate.toFixed(0);
}

let totalAutoGen = 0;

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
        
        //add the autoGen rate of the current upgrade to the totalAutoGen
        if (upgradeCosts[upgrade].autoGen) {
            totalAutoGen += upgradeCosts[upgrade].autoGen;
        }
        
        // Check if max purchases are reached for the current upgrade
        if (upgradeCosts[upgrade].purchasesMade === upgradeCosts[upgrade].maxPurchases) {
            // Show message when the max purchases are reached
            const messageMax = `You have purchased the maximum number for ${upgrade}.`;
            // Update button text with the max purchase message
            if (upgrade === 'upgrade1') {
                upgrade1Button.textContent = messageMax;
                upgrade1Button.disabled = true; // Disable the button
            } else if (upgrade === 'upgrade2') {
                upgrade2Button.textContent = messageMax;
                upgrade2Button.disabled = true;
            } else if (upgrade === 'upgrade3') {
                upgrade3Button.textContent = messageMax;
                upgrade3Button.disabled = true;
            } else if (upgrade === 'upgrade4') {
                upgrade4Button.textContent = messageMax;
                upgrade4Button.disabled = true;
            }
        } else{
            
            
            // Increase the cost
            upgradeCosts[upgrade].cost = Math.floor(upgradeCosts[upgrade].cost * costIncreaseFactor);
            
            // Message to show purchase was successful, and the new upgrade cost
            const message1 = `You have purchased ${upgradeCosts[upgrade].purchasesMade} Worker(s)! Upgrade cost increased to: ${upgradeCosts[upgrade].cost}`;
            const message2 = `You have purchased ${upgradeCosts[upgrade].purchasesMade} Factory(s)! Upgrade cost increased to: ${upgradeCosts[upgrade].cost}`;
            const message3 = `You have purchased ${upgradeCosts[upgrade].purchasesMade} Money Printer(s)! Upgrade cost increased to: ${upgradeCosts[upgrade].cost}`;
            const message4 = `You have purchased ${upgradeCosts[upgrade].purchasesMade} a Bill Upgrade! Upgrade cost increased to: ${upgradeCosts[upgrade].cost}`;
            if (upgrade === 'upgrade1') {
                upgrade1Button.textContent = message1;
            } else if (upgrade === 'upgrade2') {
                upgrade2Button.textContent = message2;
            } else if (upgrade === 'upgrade3') {
                upgrade3Button.textContent = message3;
            } else if (upgrade === 'upgrade4') {
                upgrade4Button.textContent = message4;
            }
        }
        updateDisplay();
        alert(`${upgrade} purchased!`);
    } else {
        alert("Not enough currency to buy this upgrade.");
    }
}

// set up auto generation for currency based on upgrades
function autoGenerateCurrency() {
  // for each upgrade, check if it has been purchased and increase currency
  if (upgradeCosts.upgrade1.purchasesMade > 0) {
      currency += upgradeCosts.upgrade1.autoGen * upgradeCosts.upgrade1.purchasesMade;
  }
  if (upgradeCosts.upgrade2.purchasesMade > 0) {
      currency += upgradeCosts.upgrade2.autoGen * upgradeCosts.upgrade2.purchasesMade;
  }
  if (upgradeCosts.upgrade3.purchasesMade > 0) {
      currency += upgradeCosts.upgrade3.autoGen * upgradeCosts.upgrade3.purchasesMade;
  }
  totalText();
}

//combine autoGens into one value so rates stack and combine
function autoGenerateCurrency() {
  currency += totalAutoGen;
  totalText();
}


//rate of auto generated currency 
setInterval(autoGenerateCurrency, 1000);

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