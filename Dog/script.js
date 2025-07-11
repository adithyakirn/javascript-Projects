const imgContainer = document.querySelector(".img-container")
const messageBox = document.getElementById("hi-el")
const buttonContainer = document.querySelector(".button-container")

const actions = {
  sit: {
    label: "Make the Dog Sit",
    text: "The dog is sitting ",
    img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9icDAxcWhyOWY1OG82cHg3cXhwMm1nOWtoM2N6cm14ajZnMjJzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FmRLBRZfpMNwWdy/giphy.gif"
  },
  run: {
    label: "Make the Dog Run",
    text: "The dog is running ",
    img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWF1dTQ3dHBvdTJzdXd0YmIyeDA1c3BpZGFlejJoOWlvdGd4ZDZ3aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8SuKOupsVwBUGGButK/giphy.gif"
  },
  bark: {
    label: "Make the Dog Bark",
    text: "The dog is barking ",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzNhY2F6dHdraHR2anZwdzZzbWQxYXlxNjloMmowY3E2MzN6c3NuNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KX7khoMaKYRXlZWDd6/giphy.gif"
  },
  catch: {
    label: "Make the Dog Catch the Ball",
    text: "The dog is catching the ball ",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTRsNjF5bGM2enhhdTFxNGVxY3dseDcycDZuc2ZqeGNqcmRudm4wZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9V1vVv9MGFq09JPoEM/giphy.gif"
  },
  attack: {
    label: "Make the Dog Attack",
    text: "The dog is attacking! ",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGN6MGluaTRxcmlydzM2dmRteTM4MGN4MnpyaWh0dXZxOG4wN2lrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AtwrcuevjPsys/giphy.gif"
  },
  feed: {
    label: "Feed the Dog",
    text: "Feeding the dog ",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGZtaHJ6Yzk4M3hndHVwOW5mYjhmMDBsanFmdTd4NGxtdnZoNm5nNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6YgmZgf39gBdu1Ko/giphy.gif"
  }
}

Object.entries(actions).forEach(([key, action]) => {
  const btn = document.createElement("button")
  btn.id = key
  btn.textContent = action.label
  btn.addEventListener("click", () => {
    imgContainer.innerHTML = `<img src="${action.img}" style="width:300px; border-radius: 10px;" />`
    messageBox.textContent = action.text
  })
  buttonContainer.appendChild(btn)
})