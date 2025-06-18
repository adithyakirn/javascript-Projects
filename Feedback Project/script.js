// let happy = document.getElementById("happy")
// let nuetral = document.getElementById("nuetral")
// let unhappy = document.getElementById("unhappy")
const emojis = document.querySelectorAll(".emoji-container")
let btn = document.querySelector(".submit-btn")
const Container = document.querySelector(".feedback-container")
let selectedEmoji
emojis.forEach((emoji) =>{
    emoji.addEventListener("click",(event) =>{
        removeOnclick()
        selectedEmoji = event.target.innerText;
        emoji.classList.add("onclick")
    })
})
btn.addEventListener("click",()=>{
    if(selectedEmoji){
        Container.innerHTML =`
            <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedEmoji}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
        }
    })
    
    function removeOnclick(){
        emojis.forEach((emoji) =>{
            emoji.classList.remove("onclick")
        })
        
}