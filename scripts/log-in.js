//  button log in
window.addEventListener('DOMContentLoaded', () => {
  const logButton = document.querySelector('.log_button');
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  //  mobile
  logButton.addEventListener('click', async (e) => {
    e.preventDefault()
    logButton.classList.add('btn_view--hover')

    setTimeout(() => {
      logButton.classList.remove('btn_view--hover')
    }, 1000)

    let email = emailInput.value.trim()
    let password = passwordInput.value.trim()

    if(!email || !password) {
      alert('لطفا ایمیل و رمز عبور را وارد کنید')
      return;
    }
    const res = await fetch('https://sabzelearn-prictice-default-rtdb.firebaseio.com/users.json')
    const data = await res.json()

    const users = data ? Object.values(data) : []
    const user = users.find(user => user.email === email && user.password === password)

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      alert(`سلام ${user.name}, خوش آمدی`)
      emailInput.value = ''
      passwordInput.value = ''
      window.location.href = "index.html"
    } else {
      alert('ایمیل یا رمز اشتباهه');
    }

  })




  logButton.addEventListener('mouseenter', () => {
    logButton.classList.add('btn_view--hover')
  })
  logButton.addEventListener('mouseleave', () => {
    logButton.classList.remove('btn_view--hover')
  })

})


