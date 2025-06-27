const gnrBtn = document.querySelector(".Genarate-button")
const cpyBtn = document.querySelector(".dlt-button")
let passHeader = document.getElementById("input")

const lowerCase = ["abcdefghijklmnipqrstuvwxyz"]
const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const number = ["1234567890"]
const symbols = ["!@#$%^&**()_-;:><.,?/~"]

const allchar = lowerCase + upperCase + number + symbols;
let randomIndex = ""

passHeader.textContent= "Genarate Password"
gnrBtn.addEventListener("click", (e)=>{
    passHeader.textContent =""
    for (let i=0;i<=10;i++){
    randomIndex = Math.floor(Math.random() * allchar.length)
    passHeader.textContent+= allchar[randomIndex]
    passHeader.style.background = "black"
    passHeader.style.color = "red"
    cpyBtn.style.color = "black"
    cpyBtn.style.border = "none"
    gnrBtn.style.background = "red"
    gnrBtn.style.border = "none"
}
})

cpyBtn.addEventListener("click",()=>{
    let copy = passHeader.textContent
    console.log(copy)
    navigator.clipboard.writeText(copy);
    alert("copied Text")
})


