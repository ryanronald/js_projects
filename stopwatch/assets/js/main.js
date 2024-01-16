const watch = document.querySelector('.time');
let seconds = 0;
let timer;

function getSeconds(sec ) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('en', {
        hour12: false,
        timeZone: 'UTC'
    });
};

function starTimer(){
    timer = setInterval(() => {
        seconds++
        watch.innerHTML = getSeconds(seconds);
    }, 1000);
};

document.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('start')) {
        starTimer()
    }
    if (element.classList.contains('pause')) {
        clearInterval(timer)
    }
    if (element.classList.contains('stop')) {
        clearInterval(timer)
        seconds = 0
        watch.innerHTML = '00:00:00'
    }
});