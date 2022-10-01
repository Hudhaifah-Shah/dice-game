// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const cowEmoji = document.getElementById("cow")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
        cow()
        cow2()
        cow3()
        cow4()
        cow5()
        cow6()
        PlaySound()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
        cow()
        cow2()
        cow3()
        cow4()
        cow5()
        cow6()
        PlaySound()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

function cow() {
    let id = null
    let pos = 150
  clearInterval(id)
  cowEmoji.style.display = "block"
  id = setInterval(frame, 6)
  function frame() {
    if (pos == -7500) {
      clearInterval(id)
    } else {
      pos = pos - 10 
      cowEmoji.style.left = pos + "px"
    }
  }
}
function cow2() {
  let id = null;
  const elem = document.getElementById("sheep")
  elem.style.display = "block"
  let pos = 150
  clearInterval(id)
  id = setInterval(frame, 5)
  function frame() {
    if (pos == -7500) {
      clearInterval(id)
    } else {
      pos = pos - 10
      elem.style.left = pos + 'px'
    }
  }
}
function cow3() {
  let id = null
  const elem = document.getElementById("cow3")
  elem.style.display = "block"
  let pos = 150
  clearInterval(id)
  id = setInterval(frame, 5)
  function frame() {
    if (pos == -7500) {
      clearInterval(id)
    } else {
      pos = pos - 10
      elem.style.left = pos + 'px'
    }
  }
}
function cow4() {
  let id = null
  const elem = document.getElementById("cow4")
  elem.style.display = "block"
  let pos = 150
  clearInterval(id)
  id = setInterval(frame, 5)
  function frame() {
    if (pos == -7500) {
      clearInterval(id)
    } else {
      pos = pos - 10
      elem.style.left = pos + 'px'
    }
  }
}
function cow5() {
  let id = null
  const elem = document.getElementById("cow5")
  let pos = 150
  clearInterval(id)
  elem.style.display = "block"
  id = setInterval(frame, 5)
  function frame() {
    if (pos == -7500) {
      clearInterval(id)
    } else {
      pos = pos - 10
      elem.style.left = pos + 'px'
    }
  }
}
function cow6() {
  let id = null
  const elem = document.getElementById("cow6")
  let pos = 150
  clearInterval(id)
  elem.style.display = "block"
  id = setInterval(frame, 5)
  function frame() {
    if (pos == -7500) {
      clearInterval(id)
    } else {
      pos = pos - 10
      elem.style.left = pos + 'px'
    }
  }
}
function PlaySound() {
      var sound = document.getElementById("mooAudio")
      sound.play()
  }
  

