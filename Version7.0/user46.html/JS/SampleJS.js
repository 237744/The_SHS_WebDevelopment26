// 2048 Game
const GRID_SIZE = 4;
let board = [];
let score = 0;

function initBoard() {
  board = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
  addNewTile();
  addNewTile();
  score = 0;
  render();
}

function addNewTile() {
  const empty = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board[i][j] === 0) empty.push({ x: i, y: j });
    }
  }
  if (empty.length > 0) {
    const { x, y } = empty[Math.floor(Math.random() * empty.length)];
    board[x][y] = Math.random() < 0.9 ? 2 : 4;
  }
}

function move(direction) {
  let moved = false;
  if (direction === 'left' || direction === 'right') {
    for (let i = 0; i < GRID_SIZE; i++) {
      const row = direction === 'left' ? board[i] : board[i].reverse();
      const { newRow, changed } = slideAndMerge(row);
      if (changed) moved = true;
      board[i] = direction === 'left' ? newRow : newRow.reverse();
    }
  } else {
    for (let j = 0; j < GRID_SIZE; j++) {
      const col = [];
      for (let i = 0; i < GRID_SIZE; i++) col.push(board[i][j]);
      if (direction === 'up') col.reverse();
      const { newRow: newCol, changed } = slideAndMerge(col);
      if (changed) moved = true;
      if (direction === 'up') newCol.reverse();
      for (let i = 0; i < GRID_SIZE; i++) board[i][j] = newCol[i];
    }
  }
  if (moved) {
    addNewTile();
    render();
    if (isGameOver()) console.log('Game Over!');
  }
}

function slideAndMerge(row) {
  let arr = row.filter(val => val !== 0);
  let changed = arr.length !== row.filter(val => val !== 0).length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      score += arr[i];
      arr.splice(i + 1, 1);
      changed = true;
    }
  }
  while (arr.length < GRID_SIZE) arr.push(0);
  return { newRow: arr, changed: changed || arr.length !== row.length };
}

function isGameOver() {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board[i][j] === 0) return false;
      if (j < GRID_SIZE - 1 && board[i][j] === board[i][j + 1]) return false;
      if (i < GRID_SIZE - 1 && board[i][j] === board[i + 1][j]) return false;
    }
  }
  return true;
}

function render() {
  console.clear();
  console.log(`Score: ${score}`);
  for (let i = 0; i < GRID_SIZE; i++) {
    console.log(board[i].map(val => val || '.').join('\t'));
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') move('left');
  if (e.key === 'ArrowRight') move('right');
  if (e.key === 'ArrowUp') move('up');
  if (e.key === 'ArrowDown') move('down');
});

initBoard(); 
function changeText() {
 document.getElementById("textChange").innerHTML="Thanks for liking pizza! You are my friend now! :)";
}
var space = " ";
var pos = 0;
var msg = "User 46";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function showAlert() {
    alert("Hello");
}

function changeColor() {
    document.body.style.backgroundColor = "lightcoral";
}

function resetColor() {
    document.body.style.backgroundColor = "white";
}

function hideText() {
    document.getElementById("hideMe").style.display = "none";
}

function showText() {
    document.getElementById("hideMe").style.display = "block";
}
