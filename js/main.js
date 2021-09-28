// timer

const timer = {
    minutes: 15,
    seconds: 0,
    m_markup: document.querySelector('.minutes'),
    s_markup: document.querySelector('.seconds'),
}

const tick = setInterval(function() {
    if (timer.seconds === 0) {
        --timer.minutes;
        timer.seconds = 59;
    }

    if (timer.minutes <= 0) clearInterval(tick);

    timer.m_markup.textContent = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
    timer.s_markup.textContent = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;

    --timer.seconds;
}, 1000);