const btns = document.querySelectorAll('.js_btn')
const content = document.querySelector('.content');
const contentResult = document.querySelector('.result');
let numberCurrent = "";
let numberOld = "";
let result = "";
let operation;
let count = 0;

for (const btn of btns) {
    btn.addEventListener('click', () => {
        if(btn.value != "=" && btn.value != "ac" && btn.value != 'del') {
            content.innerHTML += btn.innerHTML;
        }
        if (btn.value > 0 && btn.value < 10 || btn.value == ".") {
            numberCurrent += btn.value
        }
        if(btn.value == "+" || btn.value == "-" || btn.value == "*" || btn.value == "/") {
            console.log(count);
            if(count > 0) {
                if(numberCurrent !== "" && numberOld != "") {
                    calc()
                }
            }
            operation = btn.value;
            numberOld = numberCurrent;
            numberCurrent = "";
            count++;
        }
    })
}

function reset() {
    content.innerHTML = ""
    contentResult.innerHTML = "";
    result = "";
    numberCurrent = "";
    numberOld = "";
    count = 0;
}

function equal() {
    if(numberCurrent !== "" && numberOld != "") {
        calc()
    } else {
        return;
    }
}

function del() {
    content.innerText = content.innerText.toString().slice(0,-1);
    numberCurrent = content.innerText;
    if(numberCurrent == "") {
        result = "";
        count = 0;
    }
}

function calc() {
    if(isNaN(numberOld) || isNaN(numberCurrent)) return;
    switch(operation) {
        case '+':
            result = parseFloat(numberOld) + parseFloat(numberCurrent);
            break;
        case '-':
            result = parseFloat(numberOld) - parseFloat(numberCurrent);
            break;
        case '/':
            result = parseFloat(numberOld) / parseFloat(numberCurrent);
            break;
        case '*':
            result = parseFloat(numberOld) * parseFloat(numberCurrent);
            break;
    }
    numberCurrent = result; 
    contentResult.innerHTML = result;
    operation = undefined;
}