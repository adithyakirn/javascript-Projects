const container = document.querySelector(".colors-container")
const api = "https://www.csscolorsapi.com/api"
const colors = document.querySelectorAll(".individial-colors")
const colorTexts = document.querySelectorAll(".colors")
let randomHex = []
async function getColors(){
    colors.forEach((color)=>{
        randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        color.style.background = `#${randomHex}`
    })
    colorTexts.forEach((e)=>{
        e.textContent = `#${randomHex}`
    })
}
getColors()