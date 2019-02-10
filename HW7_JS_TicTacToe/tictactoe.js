var board = [];
var turnX = true;
var turnNumber = 0;

function start(){
  for(let y=0; y<3; y++){
    let row = [];
    for(let x=0; x<3; x++){
      let div = document.createElement("div");
      div.setAttribute('class', 'checker');
      if(y==0){
        div.classList.add("top");
      }
      if(x==0){
        div.classList.add("left");
      }
      div.addEventListener('click', play);
      document.getElementById("board").appendChild(div);
      row.push(div);
    }
    board.push(row);
  }
  document.getElementById("turnAnnouncer").textContent = "X goes first.";
  document.getElementById("restartButton").style.display = 'none';
}

function play(){
  if(event.target.textContent == ""){
    if(turnX){
      event.target.textContent = "X";
      document.getElementById("turnAnnouncer").textContent = "It is now O's turn.";
    }else{
      event.target.textContent = "O";
      document.getElementById("turnAnnouncer").textContent = "It is now X's turn.";
    }
    turnX = !turnX;
    turnNumber++;
    if(turnNumber == 9){
      document.getElementById("turnAnnouncer").textContent = "Game finished. Press the button to start over.";
      document.getElementById("restartButton").style.display = 'block';
    }
  }
}

function startOver(){
  board = [];
  turnX = true;
  turnNumber = 0;
  let boardElement = document.getElementById("board");
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
  }
  start();
}

var btn = document.getElementById("restartButton");
btn.addEventListener('click', startOver);
start();
