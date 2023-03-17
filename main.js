let listPhrases = [
  "Você é um espetacular.",
  "Hum... parece que a sorte foi minha.",
  "Espalhe amor e sentira alegria.",
  "Seja sua melhor vesão!",
  "Amiga é a pessoa que te olha nos olhos e diz a verdade.",
  "O melhor amigo não pede nada alem do seu bem estar",
  "Lembre de mandar um abraço pra quem é importante",
  "Até o Ranger vermelho precisa de ajuda.",
  "Um megazord não se controla sozinho.",
  `A gentileza é igual a carta "Reverso" no uno¹`,
  "E a falta de educação tambem²",
  "Essa frase até que é boa¹",
  "Mas essa é melhor²",
]
let randomNumber = Math.round(Math.random() * (listPhrases.length - 1))
const fortuneCookie = document.querySelector(".fortuneCookie")
const fortuneMessage = document.querySelector(".fortuneMessage")
const imgCookie = document.querySelector(".cookie")
const message = document.querySelector(".message")
const btn = document.querySelector("button")

//eventos
imgCookie.addEventListener("click", cookieClick)
btn.addEventListener("click", resetClick)

//functions
function cookieClick() {
  fortuneCookie.classList.toggle("hide")
  fortuneMessage.classList.toggle("hide")
  message.innerText = String(listPhrases[randomNumber])
}
function resetClick() {
  fortuneCookie.classList.toggle("hide")
  fortuneMessage.classList.toggle("hide")
  randomNumber = Math.round(Math.random() * (listPhrases.length - 1))
}
