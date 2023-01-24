class Car {
    constructor() {
      this.x = canvas.width / 2 - 45,
      this.y = canvas.height / 2 + 200,
      this.w = 80,
      this.h = 150
    }   
    
    draw() {
        let img2 = new Image();
        img2.src = "./images/car.png"
        ctx.drawImage(img2, this.x, this.y, this.w, this.h)
    }
  }
  function startGame() {
    canvas.width = 500;
    canvas.height = 700;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    let car1 = new Car();
    car1.draw();
}
class Car {
    constructor() {
      this.x = canvas.width / 2 - 45,
      this.y = canvas.height / 2 + 200,
      this.w = 80,
      this.h = 150,
      this.speed = 40 
    }   
    
    draw() {
        let img2 = new Image();
        img2.src = "./images/car.png"
        ctx.drawImage(img2, this.x, this.y, this.w, this.h)
    }
    
    moveLeft() {
        if (this.x < 50) {
          return
        }
        this.x -= this.speed
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        this.draw()
    }
  
    moveRight() {
        if (this.x > canvas.width - (this.w + 50)) {
          return
        }
        this.x += this.speed
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        this.draw()
    }
  }
  
