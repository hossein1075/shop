// components

import { footerUser } from "../components/footer/footer-user.js"
import { headerTop } from "../components/header/header-top.js"

window.customElements.define('header-top', headerTop)
window.customElements.define('footer-user', footerUser)

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
  
    document.querySelector('#Days .number').innerText = format(day);
    document.querySelector('#Houres .number').innerText = format(houre);
    document.querySelector('#Minutes .number').innerText = format(minute);
    document.querySelector('#Seconds .number').innerText = format(seconde);
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
