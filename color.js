/*creating random color*/
var numOfSquare = 6;
var colors = generateRandomColors(numOfSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easyBtn");
var hard = document.getElementById("hardBtn");

easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numOfSquare = 3;
    colors = generateRandomColors(numOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // displaying only three colors for easy mode
    for(var i = 0 ; i < squares.length; i++){
        // changing the colors of first three
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none"; 
        }
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numOfSquare = 6;
    colors = generateRandomColors(numOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // displaying 6 colors for hard mode
    for(var i = 0 ; i < squares.length; i++){
        // changing the colors of first three
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"; 
    }
});

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    // generate all new colors
    colors = generateRandomColors(numOfSquare);
    // pick new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change the colors of squares
    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";

});
for(var i=0; i<squares.length;i++){
    // adding initial color to all squares
    squares[i].style.backgroundColor=colors[i];

    // adding click listeners 
    squares[i].addEventListener("click", function(){
    // grab color of clicked square & compare it to pickedColor variable
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
        
        messageDisplay.textContent = "CORRECT!!"
        resetButton.textContent = "PLAY AGAIN ?"
        changeColors(clickedColor); // calling function
        h1.style.backgroundColor = clickedColor;
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "TRY AGAIN";
    }
    });}
    function changeColors(color){
        // loop through all squares 
        for(var i=0; i<squares.length;i++){
        // change the cololor of all squaers to correct color
        squares[i].style.backgroundColor = color;
        }

        
    }
   // function pick random number
    function pickColor(){
        var rnum = Math.floor(Math.random() * colors.length);
        return colors[rnum];
    }

    function generateRandomColors(num){
        // making array
        var arr = [];
        // repeat num times
        for(var i=0;i<num; i++){
        // get random color and push into array
            arr.push(randomColor());

        }
        return arr;
    }

function randomColor(){
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")"; // bug here-- fixed - spaces
}

// how to play
var btnHow = document.getElementById("how");
btnHow.addEventListener("click",function(){
    alert("Step 1: Observe the colors in RGB format given at the top" + "\nStep 2: Make your guess and click the color boxes. If you make the right guess all the boxes will turn into the one color" +"\nIf you do not like the colors press NEW COLOR button, you can also switch between easy and hard mode using EASY and HARD button.");
});