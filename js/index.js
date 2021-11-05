const canvas= document.querySelector ('canvas')

canvas.width= 500
canvas.height= 650

const ctx= canvas.getContext("2d")


let car = new Image ()
car.src = '/images/car.png'
car.onload = () => {
  ctx.drawImage(car, 150,canvas.height-160,158 , 250)
}

window.onkeydown = function (e) {

  switch (e.key){
    case 'ArrowLeft':
      car.x-= 100
      break;
      case 'ArrowRight':
      car.x+= 100
      break;
  }
}

const enemies=[]
let speed= 2

setIntersetInterval(() => {
  console.log("add a new enemy", enemies)
  enemies.push({
    x: Math.floor(Math.random()*2),
    y: canvas.height,
      w: 25,
      h: 8,
      speed: 
  })
  speed++;
}, 500)



//Lets you cancel your animationFrame
let int;

//Your game engine ... The page turner ... Infinite loop
function animate() {
  int = window.requestAnimationFrame(animate)

  //Clear entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

//Draw Enemies
  ctx.fillStyle = 'purple'
  for (let enemy of enemies) { //Draws each enemy one to the left
      ctx.fillRect(enemy.x -= enemy.speed, enemy.y, enemy.w, enemy.h)
      detectCollision(hero, enemy)
  }
  // ctx.fillRect(enemy.x--, enemy.y, enemy.w, enemy.h)
  // ctx.fillRect(enemy2.x--, enemy2.y, enemy2.w, enemy2.h)
  // ctx.fillRect(enemy3.x--, enemy3.y, enemy3.w, enemy3.h)
}

animate()


function detectCollision(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.h + rect1.y > rect2.y) {
      console.log('collision')
      window.cancelAnimationFrame(int)
      // window.location.reload()
  }
  // collision detected!
}


function animate(){
int=window.requestAnimationFrame(animate)

ctx.drawImage(image, CanvasImageSource,)
}