// timer

const timer = {
    minutes: 15,
    seconds: 0,
    timers_count: document.querySelectorAll('.timer'),
    m_markup: document.querySelectorAll('.minutes'),
    s_markup: document.querySelectorAll('.seconds'),
}

const tick = setInterval(function() {
    if (timer.seconds === 0) {
        --timer.minutes;
        timer.seconds = 59;
    }

    if (timer.minutes <= 0 && timer.seconds <= 0) clearInterval(tick);

    for (let i = 0; i < timer.timers_count.length; i++) {
        timer.m_markup[i].textContent = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
        timer.s_markup[i].textContent = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;
    }

    --timer.seconds;
}, 1000);

// sender

async function sender(name, phone, campaign_id) {
    const response = await fetch('https://tracker.everad.com/conversion/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: 'no-cors',
      body: `name=${name}&phone=${phone}&campaign_id=${campaign_id}`
    });
    return response;
  }

// form submit

$('.form__order').submit(function(e) {
    e.preventDefault();

    const data = new FormData(this);
    const name = data.get('name');
    const phone = data.get('phone');
    const campaign_id = data.get('campaign_id');
    const url = `subscribe.html?name=${name}&phone=${phone}&campaign_id=${campaign_id}`;

    sender(name, phone, campaign_id);

    window.open(url).focus();
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

// phone button

const $phone = document.querySelector('.call-button');
const $popupForm = document.querySelector('.popup');

$phone.addEventListener('click', () => {
    $('.popup').fadeIn();
});

$popupForm.addEventListener('click', function(e) {
    if (e.target === this) $('.popup').fadeOut();
});

// customers actions popup

const names = ['Богдан А.К', 'Василий П.О', 'Кирилл О.Г', 'Анастасия У.К', 'Диана А.А'];
const price = 980;
const $customerName = document.querySelector('.customer_name');
const $packageCount = document.querySelector('.package_count');
const $totalPrice = document.querySelector('.total_price');

const appear = setInterval(() => {
    const count = Math.floor(Math.random() * 5);

    $('.customers-action').fadeIn();
    $customerName.textContent = names[Math.floor(Math.random() * 5)];
    $packageCount.textContent = (count ? count : 1) + ' шт.';
    $totalPrice.textContent = (count ? count : 1) * price + ' руб.';

    setTimeout(() => {
        $('.customers-action').fadeOut();
    }, 4000);
}, 1e4);

// smooth scroll

$("a[href='#']").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($(".form").offset().top)
    }, 2000);
  });


// redirect on back button click

$(window).on('popstate', function(event) {
    if (!window.location.href.includes('#')) window.location.href = 'https://www.instagram.com/';
});