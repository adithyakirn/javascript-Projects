const bodyEl = document.querySelector("body")
const navEl = document.querySelector(".nav")
const textEl = document.querySelector(".text-container")

window.addEventListener("scroll", ()=>{
    if(window.scrollY < 500){
        textEl.style.color="red"
    }
    else if(window.scrollY < 1650){
        textEl.style.color="#000"
    }
    else{
        textEl.style.color= "red"
    }
    console.log(window.scrollY)
})