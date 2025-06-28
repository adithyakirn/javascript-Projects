const input = document.getElementById("input")
const total = document.getElementById("total-char")
let remaining = document.getElementById("remaining")
const maxLetter = 50;
let remainingLetter = ''
input.addEventListener("input", () =>{
    const currentCount = input.value.length
    if(currentCount <= 50){
    total.innerText =  `Total Charecters : ${currentCount}`
    remainingLetter = maxLetter - currentCount
    remaining.textContent = `Remaining Letters : ${remainingLetter}`
    }
    else{
        input.disabled = true
    }
})

