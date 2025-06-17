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
    if(selectedEmoji == ""){
        Container.innerHTML =`
            <strong>Thank You!</strong>
            <br>
            <br>
            <p>We'll use your feedback to improve our customer support.</p>`;
        }
        else if(selectedEmoji =="Unhappy"){
            Container.innerHTML =`
            <strong>Thank You!</strong>
            <br>
    <video src="/Generated File June 07, 2025 - 5_56PM.mp4"  autoplay muted loop></video>
            <br>
    <audio src="/Ramba ho ho ho.mp3" autoplay loop></audio>

            <p>Poda Myre.</p>
            `
        }
        else{
           Container.innerHTML = `
            <strong>Thank You!</strong>
            <br>
            <br>
             <strong id="result">Feedback: ${selectedEmoji} </strong>
            <p>We'll use your feedback to improve our customer support.</p>`;
        }
    })
    
    function removeOnclick(){
        emojis.forEach((emoji) =>{
            emoji.classList.remove("onclick")
        })
        
}