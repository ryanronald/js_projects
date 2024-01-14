const display = document.querySelector('.display');
const historic = document.querySelector('.historic')

// add a historic
function createHistoric(operation,result) {
    const item = document.createElement('li');
    item.innerText = operation + ' = ' + result

    historic.appendChild(item);
}

//Show the result of the display
function showResult() {
    try {
        const result = eval(display.value);
        createHistoric(display.value, result)
        display.value = result;
    } catch (erro) {
        window.alert('Operação inválida');
        display.value = '';
    };
};

//delete all in diplay
function clearDisplay(){
    display.value = '';
};

//delete the last number
function backspace() {
    //display.value = display.value.slice(0, -1);
    const value = display.value.split('');
    value.pop();
    display.value = value.join('');
};

//Show all clicked numbers on display
function toDisplayValue(value) {
    display.value += value;
};

//Map Kays
function mapKeys(element) {
    if(element.classList.contains('btn-num')) toDisplayValue(element.innerText);
    if(element.classList.contains('btn-clear')) clearDisplay();
    if(element.classList.contains('btn-del')) backspace();
    if(element.classList.contains('btn-eq')) showResult();
};

//start all
document.addEventListener('click', (event) => {
    const element = event.target;
    mapKeys(element);

});