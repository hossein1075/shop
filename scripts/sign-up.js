window.addEventListener('DOMContentLoaded', ()=> {
    const signButton = document.querySelector('.sign_button');
    //  mobile
      signButton.addEventListener('click', ()=> {
        signButton.classList.add('btn_view--hover')
  
        setTimeout(()=> {
          signButton.classList.remove('btn_view--hover')
        }, 1000)
      })
      signButton.addEventListener('mouseenter', ()=> {
        signButton.classList.add('btn_view--hover')
      })
      signButton.addEventListener('mouseleave', ()=> {
        signButton.classList.remove('btn_view--hover')
      })
    
  })