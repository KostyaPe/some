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

const $form = document.querySelector('.form__order');

$form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = new FormData(this);
    const name = data.get('name');
    const phone = data.get('phone');
    const campaign_id = data.get('campaign_id');
    const url = `subscribe.html?name=${name}&phone=${phone}&campaign_id=${campaign_id}`;

    sender(name, phone, campaign_id);

    window.open(url).focus();
});