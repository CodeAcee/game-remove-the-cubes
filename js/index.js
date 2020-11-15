const Game = (function () {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
  document.getElementById('timer')
  return {
    start: function() {
        this.timer()
    },
    timer: function() {  
    },
    close: function () {
      document.getElementById('modal').style.display = 'none'
    },
    open: function () {
      document.getElementById('modal').style.display = 'block'
    },
  }
})()
