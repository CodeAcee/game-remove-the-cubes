

  const Game = (function () {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
  const title = document.getElementById('timer')
  const btn = document.getElementById('startBtn')
  const gameArea = document.querySelector('.area__blocks')
  
  let time = 60
  let myInterval = 1
  let score = 0
  let isGameStart = false

  return {
    start: function () {
      isGameStart = true;
      if (myInterval == 1) {
        this.renderBox()
        btn.innerHTML = 'Pause'
        myInterval = setInterval(function () {
          time--
          title.innerHTML = time
        }, 1000)
      } else {
        btn.innerHTML = 'Start'
        clearInterval(myInterval)
        myInterval = 1
      }
    },
    reset: function () {
      time = 60
      title.innerHTML = time
      clearInterval(myInterval)
    },
    close: function () {
      document.getElementById('modal').style.display = 'none'
    },
    open: function () {
      document.getElementById('modal').style.display = 'block'
    },
    renderBox: function () {
      gameArea.innerHTML = ''
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

      gameArea.insertAdjacentElement('afterbegin', box)
    },
    getrandom: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    handleBoxClick: function (event) {
      if (!isGameStart) {
        return
      }
      if (event.target.dataset.box) {
        this.renderBox()
        score++
      }
    },
  }
})()
