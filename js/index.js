const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./images/road.png"

//Start game button event listener
document.getElementById('start-button').addEventListener("click", startGame);

function startGame() {
    canvas.width = 500;
    canvas.height = 700;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
