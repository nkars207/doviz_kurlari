const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

function runEventListeners() {
    amountInput.addEventListener("input", exchange);
}

async function exchange() {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;


    const result = await currency.exchange(amount, firstOptionValue, secondOptionValue);

    if (result !== null) {
        resultInput.value = result.toFixed(2); 
    } else {
        resultInput.value = "Error"; 
    }
}


runEventListeners();



document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadbutton');
    loadButton.addEventListener('click', function() {
        window.location.href = 'buton.html'; 
    });

    const headerButton = document.querySelector('.header-button');
    headerButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'buton.html'; 
    });
});