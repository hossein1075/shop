//  button log in
window.addEventListener('DOMContentLoaded', ()=> {
    const logButton = document.querySelector('.log_button');
    //  mobile
      logButton.addEventListener('click', ()=> {
        logButton.classList.add('btn_view--hover')
  
        setTimeout(()=> {
          logButton.classList.remove('btn_view--hover')
        }, 1000)
      })
      logButton.addEventListener('mouseenter', ()=> {
        logButton.classList.add('btn_view--hover')
      })
      logButton.addEventListener('mouseleave', ()=> {
        logButton.classList.remove('btn_view--hover')
      })
    
  })