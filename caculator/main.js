const btns = document.querySelectorAll('.js_btn')
const content = document.querySelector('.content');
let numberCurrent;
let numberOld;
let result = "";
for (const btn of btns) {
    btn.addEventListener('click', () => {
        if (btn.value != 'ac' && btn.value != "=") {
            content.innerHTML += btn.innerHTML;
            result += btn.value;
        }
        if (btn.value == 'ac') {
            content.innerHTML = ""
            result = "";
        }
        if (btn.value == "=") {
            for (const value of result) {

            }
        }
    })
}