const content = document.querySelector('.content');
let s = 0,
    m = 0,
    h = 0;
let timeout;

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
    timeout = setInterval(() => {
        updateTime()
    }, 1000)
}

function stop() {
    clearInterval(timeout);
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
}