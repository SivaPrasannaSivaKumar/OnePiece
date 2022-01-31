const square = document.querySelectorAll('.square')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let result = 0
let currentTime = timeleft.textContent

let gameover = document.querySelector('.gameover')


function randomSquare(){
  square.forEach(className => {
    className.classList.remove('pirate')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('pirate')
  hitPosition = randomPosition.id;
}

  square.forEach(id =>{
    id.addEventListener('mouseup',() =>{
      if(id.id === hitPosition){
        document.getElementById('audio').play();
        result = result + 1
        score.textContent = result
      }
    })
  })

  function movePirate(){
    let timerId = null
    timerId = setInterval(randomSquare,1000)
  }

  movePirate()

  function countDown(){
    currentTime--
    timeleft.textContent = currentTime
    if(currentTime === 0){
      clearInterval(timerId)
      gameover.style.visibility = 'visible'
      square.classList.remove('square')
    }
  }
  let timerId = setInterval(countDown,1000)

  function restart(){
    window.location.reload();
  }




 
