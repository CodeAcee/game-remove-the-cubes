const Game = (function () {
  const title = document.getElementById('timer')
  const btnStart = document.getElementById('startBtn')
  const btnRes = document.getElementById('resBtn')
  const modalWindow = document.querySelector('.modalWindow')
  const points = document.getElementById('points')
  const gameArea = document.querySelector('.area__blocks')
  const userName = document.getElementById('name')
  const scorePanel = document.getElementById('score')
  let score = 0
  let isGameStart = false
  let time = 2
  let myInterval = 1

  return {
    start: function () {
      isGameStart = true
      this.renderBox()
      if (myInterval === 1) {
        btnStart.innerHTML = 'Pause'
        myInterval = setInterval(function () {
          title.innerHTML = time--
          if (time <= -1) {
            clearInterval(myInterval)
            Game.endGame()
          }
        }, 1000)
      } else {
        clearInterval(myInterval)
        btnStart.innerHTML = 'Start'
        this.hideBox()
        myInterval = 1
      }
    },

    endGame: function () {
      btnStart.innerHTML = 'Start'
      this.hideBox();
      this.open();
      btnStart.disabled = true
      btnRes.disabled = true
      scorePanel.innerHTML = score
    },

    reset: function () {
      time = 60
      score = 0
      title.innerHTML = time
      points.innerHTML = score
      this.hideBox()
      clearInterval(myInterval)
      btnStart.innerHTML = 'Start'
    },

    save: function() {
      const saveData = {
        gameScore: score,
        name: userName.value
      }
      localStorage.setItem('game', JSON.stringify(saveData))
      this.addToTable()
    },

    addToTable: function() {
      const data = JSON.parse(localStorage.getItem('game'))
      
    },

    close: function () {
      modalWindow.classList.add('hide')
      btnStart.disabled = false
      btnRes.disabled = false
      
    },

    open: function () {
      modalWindow.classList.remove('hide')
    },

    renderBox: function () {
      gameArea.innerHTML = ''
      const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
      let box = document.createElement('div')
      let boxSize = this.getrandom(30, 100)
      let gameSize = gameArea.getBoundingClientRect()
      let maxTop = gameSize.height - boxSize
      let maxLeft = gameSize.width - boxSize
      let randomColorIndex = this.getrandom(0, colors.length)

      box.style.height = box.style.width = boxSize + 'px'
      box.style.position = 'absolute'
      box.style.backgroundColor = colors[randomColorIndex]
      box.style.cursor = 'pointer'
      box.style.top = this.getrandom(0, maxTop) + 'px'
      box.style.left = this.getrandom(0, maxLeft) + 'px'
      box.setAttribute('data-box', 'true')
      box.setAttribute('class', 'box')

      gameArea.insertAdjacentElement('afterbegin', box)
    },

    hideBox: function () {
      document.querySelector('.box').style.display = 'none'
    },
    handleBoxClick: function (event) {
      if (!isGameStart) {
        return
      }
      if (event.target.dataset.box) {
        this.renderBox()
        points.innerHTML = score += 1
      }
    },

    getrandom: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
  }
})()
