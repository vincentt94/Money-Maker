
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
const modal = document.getElementById('myModal');
const closer = document.querySelector('.close');
const modal2 = document.getElementById('myModal2');
const closer2 = document.querySelector('.close2');
const modal3 = document.getElementById('myModal3');
const closer3 = document.querySelector('.close3')
const modal4 = document.getElementById("myModal4");
const closer4 = document.querySelector('.close4')
const modal5 = document.getElementById('myModal5');
const closer5 = document.querySelector('.close5');
const workerUpgrade = document.getElementById('workerUpgrade');
const factoryUpgrade = document.getElementById('factoryUpgrade');
const moneyPrinterUpgrade = document.getElementById('moneyPrinterUpgrade');
const billUpgrade = document.getElementById('billUpgrade');
const moneyMulitplier = document.getElementById('moneypersec')

const costIncreaseFactor = 1.5;

//BEGINNING BUTTON BEHAVIOR 
let clickValue = 1;

//Client-side storage
let currency = parseInt(sessionStorage.getItem('currency')) || 0; 
let totalAutoGen = parseFloat(sessionStorage.getItem('totalAutoGen')) || 0;
let upgradeCosts = JSON.parse(sessionStorage.getItem('upgradeCosts')) || {
    upgrade1: { cost: 100, maxPurchases: 5, purchasesMade: 0, autoGen: 1 },
    upgrade2: { cost: 1000, maxPurchases: 4, purchasesMade: 0, autoGen: 5 },
    upgrade3: { cost: 2000, maxPurchases: 3, purchasesMade: 0, autoGen: 10 },
    upgrade4: { cost: 500, maxPurchases: 4, purchasesMade: 0 },
};


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
    saveData();
});

//SHOWS CURRENT  PRICE OF EACH UPGRADE AND UPDATES CURRENT MONEY SHOWN
function updateDisplay() {
    upgrade1CostDisplay.textContent = upgradeCosts.upgrade1.cost.toFixed(0);
    upgrade2CostDisplay.textContent = upgradeCosts.upgrade2.cost.toFixed(0);
    upgrade3CostDisplay.textContent = upgradeCosts.upgrade3.cost.toFixed(0);
    upgrade4CostDisplay.textContent = upgradeCosts.upgrade4.cost.toFixed(0);
    updateTotalAutogenRate();
}

function updateTotalAutogenRate() {
    let totalAutogenRate = 0;

    // Add up the rates for each upgrade, multiplying by the number of purchases
    totalAutogenRate += upgradeCosts.upgrade1.autoGen * upgradeCosts.upgrade1.purchasesMade;
    totalAutogenRate += upgradeCosts.upgrade2.autoGen * upgradeCosts.upgrade2.purchasesMade;
    totalAutogenRate += upgradeCosts.upgrade3.autoGen * upgradeCosts.upgrade3.purchasesMade;
    
    document.getElementById('moneypersec').textContent = totalAutogenRate.toFixed(0);
    totalAutoGen = totalAutogenRate;
}



//functions to open each modal message

function openModal() {
    modal.style.display = "block";
};

function openModal2() {
    modal2.style.display = "block";
};


function openModal3() {
    modal3.style.display = "block";
};


function openModal4() {
    modal4.style.display = "block";
};

function openModal5() {
    modal5.style.display = "block";
};

//functions to close each modal message

closer.onclick = function () {
    modal.style.display = "none";
}

closer2.onclick = function () {
    modal2.style.display = "none";
}

closer3.onclick = function () {
    modal3.style.display = "none";
}

closer4.onclick = function () {
    modal4.style.display = "none";
}

closer5.onclick = function () {
    modal5.style.display = "none";
}



//closes modal when clicking anywhere 

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}


//these functions replace the alert method by opening each modal once called upon 

function showAlert() {
    openModal();
}

function showAlert2() {
    openModal2();
}

function showAlert3() {
    openModal3();
}

function showAlert4() {
    openModal4();
}

function showAlert5() {
    openModal5();
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

         //add the autoGen rate of the current upgrade to the totalAutoGen
         if (upgradeCosts[upgrade].autoGen) {
            totalAutoGen += upgradeCosts[upgrade].autoGen;
        }

        // Check if max purchases are reached for the current upgrade
        if (upgradeCosts[upgrade].purchasesMade === upgradeCosts[upgrade].maxPurchases) {
            // Show message when the max purchases are reached
            const messageMax = `You have purchased the maximum number for workers.`;
            const messageMax2 = `You have purchased the maximum number for factories.`;
            const messageMax3 = `You have purchased the maximum number for money printers.`;
            const messageMax4 = `You have purchased the maximum number for bill upgrades.`;

            // Update button text with the max purchase message
            if (upgrade === 'upgrade1') {
                upgrade1Button.textContent = messageMax;
                upgrade1Button.disabled = true; // Disable the button
            } else if (upgrade === 'upgrade2') {
                upgrade2Button.textContent = messageMax2;
                upgrade2Button.disabled = true;
            } else if (upgrade === 'upgrade3') {
                upgrade3Button.textContent = messageMax3;
                upgrade3Button.disabled = true;
            } else if (upgrade === 'upgrade4') {
                upgrade4Button.textContent = messageMax4;
                upgrade4Button.disabled = true;
            }
        } else {
            // Increase the cost
            upgradeCosts[upgrade].cost = Math.floor(upgradeCosts[upgrade].cost * costIncreaseFactor);

            // Message to show purchase was successful, and the new upgrade cost
            const message1 = `You now have ${upgradeCosts[upgrade].purchasesMade} Worker(s)!`;
            const message2 = `You now have ${upgradeCosts[upgrade].purchasesMade} Factory(s)!`;
            const message3 = `You now have ${upgradeCosts[upgrade].purchasesMade} Money Printer(s)!`;
            const message4 = `You now have ${upgradeCosts[upgrade].purchasesMade}  Bill Upgrade(s)!`;

            if (upgrade === 'upgrade1') {
                upgrade1Button.textContent = message1;
                workerUpgrade.textContent = `Upgrade cost increased to $${upgradeCosts[upgrade].cost} `
                showAlert();
            } else if (upgrade === 'upgrade2') {
                upgrade2Button.textContent = message2;
                factoryUpgrade.textContent = `Upgrade cost increased to: $${upgradeCosts[upgrade].cost}`
                showAlert2();
            } else if (upgrade === 'upgrade3') {
                upgrade3Button.textContent = message3;
                moneyPrinterUpgrade.textContent = `Upgrade cost increased to: $${upgradeCosts[upgrade].cost}`
                showAlert3();
            } else if (upgrade === 'upgrade4') {
                upgrade4Button.textContent = message4;
                billUpgrade.textContent = `Upgrade cost increased to: $${upgradeCosts[upgrade].cost}`
                clickValue += 1;
                showAlert4();
            }
        }
        updateDisplay();
        alert(`${upgrade} purchased!`);
        saveData();

    } else {
        showAlert5();
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
 //   totalText();

    currency += totalAutoGen;
    totalText();
    saveData();
}

//combine autoGens into one value so rates stack and combine
//function autoGenerateCurrency() {
//}

// Save to localStorage
function saveData() {
    localStorage.setItem('currency', currency);
    localStorage.setItem('totalAutoGen', totalAutoGen);
    localStorage.setItem('upgradeCosts', JSON.stringify(upgradeCosts)); // Save upgrade data
}


//rate of auto generated currency 
setInterval(autoGenerateCurrency, 1000);

upgrade1Button.addEventListener('click', function () {
    buyUpgrade('upgrade1');
});

upgrade2Button.addEventListener('click', function () {
    buyUpgrade('upgrade2');
});

upgrade3Button.addEventListener('click', function () {
    buyUpgrade('upgrade3');
});

upgrade4Button.addEventListener('click', function () {
    buyUpgrade('upgrade4');
});

updateDisplay();
