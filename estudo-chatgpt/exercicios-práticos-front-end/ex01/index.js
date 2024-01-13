const title = document.getElementById("titleText")
const inputChange = document.querySelector("#input")
const buttonNext = document.getElementById("buttonNext")
const buttonPrev = document.getElementById("buttonPrev")

const textoOriginal = title.textContent

inputChange.addEventListener("keyup", (event) => {
  event.target.value
})

function trocarTitle() {
  if (inputChange.value === "") {
    alert("Escreva algum texto para mudar o h1")
    return
  }
  title.textContent = inputChange.value
}

buttonNext.addEventListener("click", () => {
  trocarTitle()
})
buttonPrev.addEventListener("click", () => {
  title.textContent = textoOriginal
  inputChange.value = ""
})
