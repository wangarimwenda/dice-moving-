/*const myBox= document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😘";
    myBox.style.backgroundColor = "tomato";});

document.addEventListener("keyup", event => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightblue";});
document.addEventListener("mouseout", event => {
    myBox.textContent = "🥰";
    myBox.style.backgroundColor = "blue";}) */



const myBox= document.getElementById("myBox");
const  moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    myBox.textContent = "😘";
    myBox.style.backgroundColor = "tomato";});

document.addEventListener("keyup", event => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightblue";});
document.addEventListener("mouseout", event => {
    myBox.textContent = " 🥰";

    myBox.style.backgroundColor = "blue";})

document.addEventListener("keydown", event => {

    
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
      if (y - moveAmount >= 0) y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
 if (x - moveAmount >= 0) x -= moveAmount;                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            }
        
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;}
    });


    
