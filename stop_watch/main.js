const content = document.querySelector('.content');
let s = 0,
    m = 0,
    h = 0;
let timeout;
var check = true; //kiem tra tranh spam nhieu lan start

function updateTime() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    var hour = h < 10 ? "0" + h : h;
    var minute = m < 10 ? "0" + m : m;
    var second = s < 10 ? "0" + s : s;
    var time = hour + ":" + minute + ":" + second;
    content.innerHTML = time;
}

function start() {
    if (check == true) {
        timeout = setInterval(() => {
            updateTime()
        }, 100)
    }
    check = false;
}

function stop() {
    clearInterval(timeout);
    check = true;
}

function reset() {
    clearInterval(timeout);
    s = 0
    m = 0
    h = 0
    var hour = h < 10 ? "0" + h : h;
    var minute = m < 10 ? "0" + m : m;
    var second = s < 10 ? "0" + s : s;
    var time = hour + ":" + minute + ":" + second;
    content.innerHTML = time;
    check = true;
}