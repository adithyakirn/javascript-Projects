const text = document.querySelector(".loading")
const endingLoader = document.querySelector(".loader")

function loader(){
    let count = 0;
   const intervel = setInterval(()=>{
        text.textContent = `${count}%`
        count++
        if(count>100){
            clearInterval(intervel)
        }
    },100)
}
loader(()=>{
})