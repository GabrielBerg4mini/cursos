const title = document.getElementById("titleText")
const buttonNext = document.getElementById("buttonNext")
const buttonPrev = document.getElementById("buttonPrev")
function trocarTitle(text) {
  title.innerText = text
}

buttonNext.addEventListener("click", () => {
  trocarTitle("Testando")
})
buttonPrev.addEventListener("click", () => {
  trocarTitle("Mude o Texto aqui")
})
