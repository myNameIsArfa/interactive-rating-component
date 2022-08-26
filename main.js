const card1= document.querySelector(".card")
const card2= document.querySelector( ".card_2")
const submitButton=document.getElementById("submit")
const rating=document.getElementById("rating")
const rates=document.querySelectorAll(".btn")

submitButton.addEventListener("click",() => {
    card1.style.display="none"
    card2.classList.remove("hidden")
})

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerText=rate.innerText
    })
})
