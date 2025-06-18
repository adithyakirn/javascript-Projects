const bodyEl = document.querySelector("body")
const roundDiv = document.querySelector(".round-div")
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("move")
    bodyEl.classList.toggle("dark")
    toggle.classList.toggle("light")
    roundDiv.classList.toggle("dark")
})

