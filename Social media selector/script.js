const icon = document.querySelector(".drop-icon")
const dropdown = document.querySelector(".drop-down-content")
const bodyEl = document.querySelector("body")
const text = document.getElementById("title")
const fb = document.getElementById("facebook")
const yt = document.getElementById("Youtube")
const tw = document.getElementById("twitter")
const titleChanger = document.getElementById("titleChanger")
const li = document.getElementById("Linkedin")
const titleLogger = document.getElementById("logoAdder")
const textArr = [fb,yt,tw,li]

textArr.map((arr) => {
    arr.addEventListener("click", () => {
        titleChanger.innerHTML = arr.innerHTML
        titleLogger.className = "icon-style " + arr.innerText
        dropdown.classList.toggle("hide")
        icon.classList.toggle("rotate")
    })
})
icon.addEventListener("click",()=>{
    dropdown.classList.toggle("hide")
    icon.classList.toggle("rotate")
    
})
