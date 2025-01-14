const ratingCard = document.getElementById("rating-card")
const thanksCard = document.getElementById("thanks-card")
const ratingValueEl = document.getElementById("rating-value")
const submitButton = document.getElementById("submit-button")
const ratingNumbersEl = document.querySelectorAll(".rating-number")
let ratingValue = ""

const removeActiveItem = () => {
  ratingNumbersEl.forEach((item) => {
    item.classList.remove("active")
  })
}

const switchDisplayingCards = () => {
  ratingCard.classList.add("hidden")
  thanksCard.classList.remove("hidden")
}

ratingNumbersEl.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveItem()

    item.classList.add("active")
    ratingValue = item.innerHTML
  })
})

submitButton.addEventListener("click", (e) => {
  if (ratingValue === "") alert("Pick a rating value ⚠️")
  else {
    ratingValueEl.innerText = `You selected ${ratingValue}`
    switchDisplayingCards()
  }
})
