/**
* LOGIC
*/
var modal = document.getElementById("myModal");
var openButton = document.getElementById("openButton");
var closeBtn = document.getElementById("closeBtn");

var paper = document.getElementById('paper'),
 scissors = document.getElementById('scissors'),
 rock = document.getElementById('rock'),

 win = document.getElementById('win'),
 choose = document.getElementById('choose'); 


var choices = ["paper", "rock", "scissors"];
var UserPoints = 0;

buttons = document.querySelectorAll(".container img");
buttons.forEach(button => {
  button.addEventListener("click",function(){
    document.getElementById("text").style.display = "none"
  })
})


rock.addEventListener("click",function () {
  check("rock");
})
paper.addEventListener("click",function () {
  check("paper");
})
scissors.addEventListener("click",function () {
  check("scissors");
})

var id
function check(id){
  var i = Math.floor(Math.random() * 3);
  var ComChoice = choices[i];
  choose.textContent =   'The computer choose: ' + choices[i];
  if (ComChoice === id){
    win.textContent = "Its a draw!"
    console.log('draw')
  }
  else if(id === "paper" && ComChoice === "rock" || id === "rock" && ComChoice === "scissors" || id === "scissors" && ComChoice === "paper"){
    document.getElementById("score").textContent = ++UserPoints;
    win.textContent;win.textContent = "Genius, You Won"
    console.log('You won!')
  }
  else{
    win.textContent = "You could try again!"
    console.log('Loser')
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

closeBtn.addEventListener('click',displayModal);
openButton.onclick = function() {
  modal.style.display = "block";
}

function displayModal() {
  modal.style.display = "none";
}
