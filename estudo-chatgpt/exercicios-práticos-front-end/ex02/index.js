const users = JSON.parse(localStorage.getItem("users")) || []

const btnLoginValid = document.querySelector(".button-login")
const btnRegisterValid = document.querySelector(".button-register")

const containerEmail = document.querySelector(".validEmail")

const passwordInput = document.querySelector("#password2")
const passwordInput2 = document.querySelector("#password3")
const passwordStrengthMessage = document.querySelector(
  ".containerValidPassword .validPassword"
)
const containerPasswordRegister = document.querySelector(
  ".containerValidPassword2 .validPassword2"
)

const checkPasswordMatch = () => {
  const password2 = passwordInput.value
  const password3 = passwordInput2.value

  if (password2 === password3) {
    containerPasswordRegister.style.color = "rgb(17, 196, 17)"
    containerPasswordRegister.innerHTML = "Senhas coincidem."
  } else {
    containerPasswordRegister.style.color = "#ec2620"
    containerPasswordRegister.innerHTML = "As senhas não coincidem."
  }
}

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value

  const isValidLength = password.length >= 6
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const hasUppercase = /[A-Z]/.test(password)

  if (isValidLength) {
    passwordStrengthMessage.style.color = "rgb(17, 196, 17)"
    passwordStrengthMessage.innerHTML = "Tamanho da senha válido."
  } else {
    passwordStrengthMessage.style.color = "#ec2620"
    passwordStrengthMessage.innerHTML =
      "A senha deve ter pelo menos 6 caracteres."
    return
  }

  if (hasSpecialChar) {
    passwordStrengthMessage.style.color = "rgb(17, 196, 17)"
    passwordStrengthMessage.innerHTML += " Contém caractere especial."
  } else {
    passwordStrengthMessage.style.color = "#ec2620"
    passwordStrengthMessage.innerHTML =
      "A senha deve conter pelo menos 1 caractere especial."
    return
  }

  if (hasUppercase) {
    passwordStrengthMessage.style.color = "rgb(17, 196, 17)"
    passwordStrengthMessage.innerHTML += " Contém letra maiúscula."
  } else {
    passwordStrengthMessage.style.color = "#ec2620"
    passwordStrengthMessage.innerHTML =
      "A senha deve conter pelo menos 1 letra maiúscula."
    return
  }

  passwordStrengthMessage.style.color = "rgb(17, 196, 17)"
  passwordStrengthMessage.innerHTML = "Senha forte."

  checkPasswordMatch()
})

passwordInput2.addEventListener("input", () => {
  checkPasswordMatch()
})

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

btnRegisterValid.addEventListener("click", (event) => {
  const inputs = document.querySelectorAll("input")
  const nameUser = document.querySelector("#nome").value
  const email = document.querySelector("#email2").value
  const password2 = document.querySelector("#password2").value
  const password3 = document.querySelector("#password3").value
  const checkbox2 = document.querySelector("#register input[name='checkbox2']")
  const containerNameRegister = document.querySelector(
    ".containerValidName .validName"
  )
  const containerEmailRegister = document.querySelector(
    ".containerValidEmail2 .validEmail2"
  )
  const containerPasswordRegister = document.querySelector(
    ".containerValidPassword2 .validPassword2"
  )
  const mensagemCheckbox = document.querySelector(".msgCheckbox")

  if (nameUser.trim() === "") {
    containerNameRegister.innerHTML = "Por favor, preencha o campo Nome."
    inputs.forEach((input) => input.classList.add("teste"))
    event.preventDefault()
  }
  if (!isValidEmail(email)) {
    containerEmailRegister.style.color = "#ec2620"
    containerEmailRegister.innerHTML = "Por favor, preencha o campo E-mail."
    inputs.forEach((input) => input.classList.add("teste"))
    event.preventDefault()
  }

  if (password2 === "" && password3 === "") {
    containerPasswordRegister.style.color = "#ec2620"
    containerPasswordRegister.innerHTML = "Por favor, preencha o campo Senha."
    inputs.forEach((input) => input.classList.add("teste"))
    event.preventDefault()
    return
  }

  if (!checkbox2.checked) {
    mensagemCheckbox.style.color = "#ec2620"
    mensagemCheckbox.innerHTML =
      "Por favor, concorde com os termos e condições."
    event.preventDefault()
    return
  }

  const user = {
    name: nameUser,
    email: email,
    password: password2,
  }

  users.push(user)

  localStorage.setItem("users", JSON.stringify(users))

  wrapper.classList.add("active")
  setTimeout(() => {
    alert("Registrado com sucesso.")
  }, 10)
  checkPasswordMatch()
})

const checkboxRemember = document.getElementById("checkbox")

window.addEventListener("load", () => {
  const rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"))

  if (rememberedUser) {
    document.getElementById("email").value = rememberedUser.email
    document.getElementById("password").value = rememberedUser.password
    checkboxRemember.checked = true
  }
})

btnLoginValid.addEventListener("click", (event) => {
  const loginEmail = document.getElementById("email").value
  const loginPassword = document.getElementById("password").value

  const user = users.find((user) => user.email === loginEmail)

  if (user && user.password === loginPassword) {
    containerEmail.innerHTML = "Login bem-sucedido."

    if (checkboxRemember.checked) {
      localStorage.setItem(
        "rememberedUser",
        JSON.stringify({ email: user.email, password: user.password })
      )
    }

    event.preventDefault()

    document.querySelector(".form-box.login").style.display = "none"

    const successScreen = document.querySelector(".login-success")
    successScreen.style.display = "grid"
    successScreen.style.gap = "2rem"

    const backToLoginButton = document.querySelector("#btnVoltarLogin")

    backToLoginButton.addEventListener("click", () => {
      successScreen.style.display = "none"
      document.querySelector(".form-box.login").style.display = "block"
    })
    successScreen.appendChild(backToLoginButton)
  } else {
    containerEmail.innerHTML = "E-mail ou senha inválidos."
    event.preventDefault()
  }
})

const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active")
})

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active")
})
