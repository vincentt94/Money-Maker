//As a: [User]
//I want: [see upgrade options]
//So that: [I can increase user currency generation at different rates]
//AC: When selecting "Hire Worker", the currency generation is increased, and changes from upgrade option to inventory option.

//Need to create an overall upgrades array that unlocks if 'moneyCounter' is higher enough. Then deducts from 'moneyCounter' once clicked.

//grabs the current total moneyCounter value
const moneyCount = document.getElementById('moneyCounter');
//grabs the bar acting as a container for the upgrades
const upgradesBar = document.getElementById('upgradesBar');
//creates an array with the upgrade options
const upgradeOptions = ['Worker', 'Factory'];
//create upgrade variables that represent the amount needed to unlock that upgrade. If moneyCount equals a certain value.
let workerUnlock = 100;
let factoryUnlock = 1000;

upgradesBar.addEventListener('click', function(event) {
    event.preventDefault();

    if(moneyCount > workerUnlock) {
        moneyCount = moneyCount - 100;
        
    }

})

    



//create function so the User can see upgrade option “Hire Worker” that increase currency generation when clicked.

    //maybe//const hireWorker = document.getElementById('hireWorker');
//grab the id 'hireWorker' from the index.html and created an event when the div is 'clicked'

//document.getElementById('hireWorker').addEventListener('click', function(event)) {
//    event.preventDefault();
//    const 
//if 'hireWorker is clicked, increase the 'upgradeCount1' by 1 increment
//        if ('click')
//}