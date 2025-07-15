// components

import { footerUser } from "../components/footer/footer-user.js"
import { headerTop } from "../components/header/header-top.js"

window.customElements.define('header-top', headerTop)
window.customElements.define('footer-user', footerUser)

//  nav
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav.nav_item');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        nav.classList.add('nav_item-scroll');
      } else {
        nav.classList.remove('nav_item-scroll');
      }
    });
  });