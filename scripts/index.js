// components

import { footerUser } from "../components/footer/footer-user.js"
import { headerTop } from "../components/header/header-top.js"

window.customElements.define('header-top', headerTop)
window.customElements.define('footer-user', footerUser)
//  Btn Card
const cardElem = document.querySelectorAll('.card_product')
//  Off Slider
const slider = document.querySelector('.scroll-snap-x')
const card = document.querySelector('.card_product')
const nextBtn = document.querySelector('#nextBtn')
const preBtn = document.querySelector('#prevBtn')
//  nav
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav.nav_item');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.classList.add('nav_item-scroll');
    } else {
      nav.classList.remove('nav_item-scroll');
    }
  });
});

//  Off Slide
function format(number) {
  return number < 10 ? "0" + number : number
}

function startCount(ten) {

  const key = "startTime"
  let now = Math.floor(Date.now() / 1000)
  let start = localStorage.getItem(key)

  if (!start || isNaN(start)) {
    localStorage.setItem(key, now)
    start = now
  } else {
    start = parseInt(start)
  }

  function update() {
    let passed = Math.floor(Date.now() / 1000) - start

    if (passed >= ten) {
      start = Math.floor(Date.now() / 1000)
      localStorage.setItem(key, start)
      passed = 0
    }

    let left = ten - passed

    const day = Math.floor(left / 86400);
    const houre = Math.floor((left % 86400) / 3600);
    const minute = Math.floor((left % 3600) / 60);
    const seconde = left % 60;
  // slider header
    document.querySelector('#Days .number').innerText = format(day);
    document.querySelector('#Houres .number').innerText = format(houre);
    document.querySelector('#Minutes .number').innerText = format(minute);
    document.querySelector('#Seconds .number').innerText = format(seconde);
    // section
    document.querySelector('#Days_Off .number').innerText = format(day);
    document.querySelector('#Houres_Off .number').innerText = format(houre);
    document.querySelector('#Minutes_Off .number').innerText = format(minute);
    document.querySelector('#Seconds_Off .number').innerText = format(seconde);
  }
  
  update()
  
  setInterval(update, 1000)


}

startCount(10 * 24 * 60 * 60)


//  Off Section Today
function startDiscountTimer(seconds) {
  const key = "discountTimerStart";
  let now = Math.floor(Date.now() / 1000);
  let start = localStorage.getItem(key);

  if (!start || isNaN(start)) {
    localStorage.setItem(key, now);
    start = now;
  } else {
    start = parseInt(start);
  }

  function update() {
    let passed = Math.floor(Date.now() / 1000) - start;

    if (passed >= seconds) {
      start = Math.floor(Date.now() / 1000);
      localStorage.setItem(key, start);
      passed = 0;
    }

    let left = seconds - passed;

    const day = Math.floor(left / 86400);
    const hour = Math.floor((left % 86400) / 3600);
    const minute = Math.floor((left % 3600) / 60);
    const second = left % 60;

    // فقط اگر المنت وجود داشت، مقداردهی کن
    const d = document.querySelector('#discountday .number');
    const h = document.querySelector('#discounthour .number');
    const m = document.querySelector('#discountminute .number');
    const s = document.querySelector('#discountseconde .number');

    if (d) d.innerText = format(day);
    if (h) h.innerText = format(hour);
    if (m) m.innerText = format(minute);
    if (s) s.innerText = format(second);
  }

  update();
  setInterval(update, 1000);
}

startDiscountTimer(25 * 24 * 60 * 60)

//  Btn Card
cardElem.forEach(card => {
  const cardBtn = card.querySelector('.card_btn'); 

  card.addEventListener('mouseenter', () => {
    cardBtn.style.visibility = "visible";
    cardBtn.style.opacity = "1";
  });

  card.addEventListener('mouseleave', () => {
    cardBtn.style.opacity = "0";

    setTimeout(() => {
      cardBtn.style.visibility = "hidden";
    }, 300);
  });
});
//  Off Slider packageCard
const cardWidth = card.offsetWidth + 16

nextBtn.addEventListener('click', ()=> {
  slider.scrollLeft += cardWidth
})
preBtn.addEventListener('click', ()=> {
  slider.scrollLeft -= cardWidth
})
//  mobile // for test
let startX = 0

slider.addEventListener('touchstart', (e)=> {
  startX = e.touches[0].clientX;
})
slider.addEventListener('touchend', (e)=> {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    console.log('رفتن به اسلاید بعدی');
  } else if (endX - startX > 50) {
    console.log('رفتن به اسلاید قبلی');
  } else {
    console.log('کشش کافی نبود'); 
  }
})

//  btn_view
window.addEventListener('DOMContentLoaded', ()=> {
  const btnView = document.querySelectorAll('.btn_view');
  //  mobile
  btnView.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
      btn.classList.add('btn_view--hover')

      setTimeout(()=> {
        btn.classList.remove('btn_view--hover')
      }, 1000)
    })
    btn.addEventListener('mouseenter', ()=> {
      btn.classList.add('btn_view--hover')
    })
    btn.addEventListener('mouseleave', ()=> {
      btn.classList.remove('btn_view--hover')
    })
  })
  // API
  const loggedInUser = localStorage.getItem('loggedInUser')

  if (!loggedInUser) {
    window.location.href = 'login.html'
  } else {
    const user = JSON.parse(loggedInUser)
    console.log('کاربر وارد شده:', user.name)

  }
  
})

