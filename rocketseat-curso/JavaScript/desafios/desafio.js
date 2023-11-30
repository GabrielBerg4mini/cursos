const button = document.getElementById("button-modal")
const containerConteudo = document.getElementById("container-conteudo")

button.addEventListener("click", () => {
  containerConteudo.classList.remove("hidden")
})

button.addEventListener("keydown", (event) => {
  if (event.key === "Escape") containerConteudo.classList.add("hidden")
})
