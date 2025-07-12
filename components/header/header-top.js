const template =document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/header/header-top.css">
  <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
  <div class="header_off text-center pt-2 d-md-flex justify-content-md-evenly align-items-md-center py-0">
      <p class="header_off_text">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span
          class="header_off_it text-decoration-underline ms-3">ShopNow</span>
      </p>
      <p class="header_off_language">
        English
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
            fill="white" />
        </svg>
      </p>
    </div>
     <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    `


class headerTop extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export { headerTop }