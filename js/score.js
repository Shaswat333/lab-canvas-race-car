let score = 0;
const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    car1.draw();
    for (let i =  0; i < obstaclesContainer.length; i++) {
        obstaclesContainer[i].draw();
        if(car1.contains(obstaclesContainer[i])){
            gamePlay = false
        }else{
            score++;
        }
    }
    drawScore()
}
const drawScore = () => {
    ctx.fillStyle = "black"
    ctx.font = "50px arial"
    ctx.fillText(`Score: ${score}`, 10, 50)
}
