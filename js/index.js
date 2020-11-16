const Game = (function () {
  const title = document.getElementById('timer')
  const btn = document.getElementById('startBtn')
  let points = document.getElementById('points')
  let gameArea = document.querySelector('.area__blocks')
  let score = 0
  let isGameStart = false
    let time = 5
      let myInterval = 1
  return {
    start: function () {
  
      isGameStart = true
      if (myInterval === 1) {
        btn.innerHTML = 'Pause'
        this.renderBox()
        myInterval = setInterval(function () {
          title.innerHTML = time--
          if (time <= -1) {
            clearInterval(myInterval)
          }
        }, 1000)
      } else {
        clearInterval(myInterval)
        btn.innerHTML = 'Start'
        myInterval = 1
      }
    },
    endGame: function () {
      console.log('end game')
      this.hideBox()
    },
    reset: function () {
      btn.innerHTML = 'Start'
      time = 60
      score = 0
      title.innerHTML = time
      points.innerHTML = score
      this.hideBox()
      clearInterval(myInterval)
    },
    close: function () {
      document.getElementById('modal').style.display = 'none'
    },
    open: function () {
      document.getElementById('modal').style.display = ''
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
