  class Obstacles  {
    constructor() {
      this.w = (Math.random() * 150) + 50,
      this.x = (Math.random() * (canvas.width - 200)) +25,
      this.y = 0,
      this.h = 50,
      this.color = "red",
      this.speedY = 1
    }
    
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        this.move()
    }
    
    move() {
        this.y += this.speedY
    } 
  }
  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    car1.draw();
    for (let i =  0; i < obstaclesContainer.length; i++) {
        obstaclesContainer[i].draw();
    }
}

let obstaclesInterval = setInterval(()=>{
    let obstacle = new Obstacles();
    obstaclesContainer.push(obstacle);
}, 2000)

  