const sliders = document.querySelectorAll(".proggress-slider");
const frontSlider = document.querySelector(".proggress-slider.front");
const lftBtn = document.querySelector(".left");
const rgtBtn = document.querySelector(".right");
let contentChanger = document.querySelectorAll(".inner-content");
let round = document.querySelectorAll(".round");
const startStop = document.querySelectorAll(".start-stop");
let currentIndex = 1;

rgtBtn.addEventListener("click", () => {
  if (currentIndex <= 3) {
    setTimeout(() => {
      contentChanger[
        currentIndex - 1
      ].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                   height="30px" viewBox="0 0 50 50">
                                   <path
                                       d="M 41.957031 8.9765625 A 2.0002 2.0002 0 0 0 40.333984 9.8945312 L 21.503906 38.279297 L 9.3261719 27.501953 A 2.0007191 2.0007191 0 1 0 6.6738281 30.498047 L 20.574219 42.796875 A 2.0002 2.0002 0 0 0 23.566406 42.40625 L 43.666016 12.105469 A 2.0002 2.0002 0 0 0 41.957031 8.9765625 z">
                                   </path>
                               </svg>`;
    }, 500);
    round[currentIndex].style.borderColor = "green";
    startStop[currentIndex].innerHTML = `<h1>Step ${currentIndex}</h1>`;
    frontSlider.classList.remove(`reverse-animation${currentIndex}`);
    frontSlider.classList.remove(`animation${currentIndex - 1}`);
    frontSlider.classList.add(`animation${currentIndex}`);
    currentIndex++;
  }
});

lftBtn.addEventListener("click", () => {
  if (currentIndex !== 1) {
    frontSlider.classList.remove(`reverse-animation${currentIndex}`);
    frontSlider.classList.remove(`animation${currentIndex}`);
    currentIndex--;
    contentChanger[
      currentIndex
    ].innerHTML = `<svg fill="grey" width="30px" height="30px" viewBox="0 0 24 24" id="cross"
    data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
    <path id="primary"
    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
    </path>
    </svg>`;
    startStop[currentIndex].innerHTML = ``;
    round[currentIndex].style.borderColor = "grey";
    frontSlider.classList.add(`reverse-animation${currentIndex}`);
  }
});
