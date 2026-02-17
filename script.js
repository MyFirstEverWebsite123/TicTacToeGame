const cells=document.querySelectorAll(".cell");
const turnText=document.getElementById("turn");
let xTurn=true;

function startGame(){
  cells.forEach(c=>{c.textContent=""; c.addEventListener("click",clickCell,{once:true});});
  xTurn=true; turnText.textContent="Player X's Turn";
}

function clickCell(e){
  e.target.textContent = xTurn?"X":"O";
  if(checkWin(xTurn?"X":"O")){turnText.textContent=`Player ${xTurn?"X":"O"} Wins!`; return;}
  if([...cells].every(c=>c.textContent)) {turnText.textContent="Draw!"; return;}
  xTurn=!xTurn;
  turnText.textContent=`Player ${xTurn?"X":"O"}'s Turn`;
}

function checkWin(p){
  const combos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return combos.some(c=>c.every(i=>cells[i].textContent===p));
}

document.getElementById("restart").addEventListener("click",startGame);
startGame();
