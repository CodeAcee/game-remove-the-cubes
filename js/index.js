const Game = (function () {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
  const title = document.getElementById('timer')
  const btn = document.getElementById('startBtn')
  let time = 60
  let myInterval = 1

  return {
    start: function () {
      if (myInterval == 1) {
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
  }
})()

// const Timer = function(callback, delay) {
//   let timerId, start, remaining = delay;

//   this.pause = function() {
//       window.clearTimeout(timerId);
//       remaining -= Date.now() - start;
//   };

//   this.resume = function() {
//       start = Date.now();
//       window.clearTimeout(timerId);
//       timerId = window.setTimeout(callback, remaining);
//   };

//   this.resume();
// };
