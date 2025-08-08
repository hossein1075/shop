//  button creat account
window.addEventListener('DOMContentLoaded', () => {
  const signButton = document.querySelector('.sign_button');
  let nameInput = document.getElementById('name_input')
  let emailInput = document.getElementById('email_input')
  let passwordInput = document.getElementById('password_input')
  //  mobile
  signButton.addEventListener('click', async (e) => {
    signButton.classList.add('btn_view--hover')

    setTimeout(() => {
      signButton.classList.remove('btn_view--hover')
    }, 1000)
    e.preventDefault();
    let name = nameInput.value.trim()
    let email = emailInput.value.trim()
    let password = passwordInput.value.trim()

    if (!name || !email || !password) {
      alert('لطفا همه فیلدها را پر کنید');
      return;
    }
    let newUser = {
      name,
      email,
      password
    }
    const res = await fetch('https://sabzelearn-prictice-default-rtdb.firebaseio.com/users.json')
    const data = await res.json()

    const users = data ? Object.values(data) : []
    const existUsers = users.find(user => user.email === email)

    if (existUsers) {
      alert('before sign up')
      return
    }
    await fetch('https://sabzelearn-prictice-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    if (resPost.ok) {
      localStorage.setItem('loggedInUser', JSON.stringify(newUser))
      alert('ثبت نام با موفقیت انجام شد');
      nameInput.value = ''
      emailInput.value = ''
      passwordInput.value = ''
      window.location.href = "index.html"
    } else {
      alert('خطا در ثبت نام')
    }
  })

  signButton.addEventListener('mouseenter', () => {
    signButton.classList.add('btn_view--hover')
  })
  signButton.addEventListener('mouseleave', () => {
    signButton.classList.remove('btn_view--hover')
  })

})

// API



