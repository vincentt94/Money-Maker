let generate = 0;

const generateEl = document.querySelector('#generate');
const counterEl = document.querySelector('#counter');

//updates the users money from each click
function totalText() {
    counterEl.textContent = generate;
};

generateEl.addEventListener('click', function () {
    generate++;
    totalText();
});


