let grid = [

  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];

let gridHeight = 30;
let gridWidth = 30;
let currentElement = 2; // Default is Sand


function grid_Init() {


  const canvas = document.getElementById("canvas_sandbox");
  console.log(canvas);
  canvas.addEventListener('mousedown', function (e) {
    getCursorPosition(canvas, e);
  })

  const update = setInterval(grid_Update, 50);

  // grid_Update();

}

function grid_Update() {


  // console.log(grid);
  for (let i = grid.length - 1; i >= 0; i--) {
    let cube = grid[i];
    for (let j = 0; j < cube.length; j++) {

      cube_Update(cube, i, j)
    }
  }

  canvas_Update();
}

function cube_Update(cube, i, j) {

  //Element 1 - Sand
  if (cube[j] == 1) {
    if ((i + 1) <= (grid.length - 1)) {
      //Down
      if (grid[i + 1][j] == 0 || grid[i + 1][j] == 2) {

        let _cube = cube[j];
        cube[j] = grid[i + 1][j];
        grid[i + 1][j] = _cube;

        //Left
      } else if (grid[i + 1][j - 1] == 0 || grid[i + 1][j - 1] == 2) {
        let _cube = cube[j];
        cube[j] = grid[i + 1][j - 1];
        grid[i + 1][j - 1] = _cube;

      } else if (grid[i + 1][j + 1] == 0 || grid[i + 1][j + 1] == 2) {
        let _cube = cube[j];
        cube[j] = grid[i + 1][j + 1];
        grid[i + 1][j + 1] = _cube;
      }
    }
  }

  //Element 2 - Water
  if (cube[j] == 2) {
    if ((i + 1) <= (grid.length - 1)) {
      
      //Down
      if (grid[i + 1][j] == 0) {
        let _cube = cube[j];
        cube[j] = 0;
        grid[i + 1][j] = _cube;

        //Random Left or Right
      } else {
        let rng = Math.floor(Math.random() * 2);

        if(rng == 0){
          if (grid[i][j - 1] == 0) {
           
            let _cube = cube[j];
            cube[j] = 0;
            grid[i][j - 1] = _cube;
  
          } else if (grid[i][j + 1] == 0) {
           
            let _cube = cube[j];
            cube[j] = 0;
            grid[i][j + 1] = _cube;
          }
        }else{
          if (grid[i][j + 1] == 0) {
           
            let _cube = cube[j];
            cube[j] = 0;
            grid[i][j + 1] = _cube;
  
          } else if (grid[i][j - 1] == 0) {
            
            let _cube = cube[j];
            cube[j] = 0;
            grid[i][j - 1] = _cube;
          }
        }
        

      }
    }
  }
}

function canvas_Update() {
  let canvas = document.getElementById("canvas_sandbox");
  const context = canvas.getContext('2d');
  let cellHeight = canvas.height / gridHeight;
  let cellWidth = canvas.width / gridWidth;

  grid.forEach((row, y) => {
    row.forEach((value, x) => {
      context.fillStyle = cellColor(value);
      context.beginPath();
      context.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      context.stroke();
    });
  });
}

function cellColor(value) {
  if (value == 1) {
    return 'sandybrown';
  }

  if (value == 2) {
    return 'steelblue';
  }

  if (value == 9) {
    return 'darkgrey'
  }

  return 'aliceblue';
}


function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  canvas = document.getElementById("canvas_sandbox");
  const context = canvas.getContext('2d');
  let cellHeight = canvas.height / gridHeight;
  let cellWidth = canvas.width / gridWidth;

  context.fillStyle = "crimson";
  let x = Math.floor((event.clientX - rect.left) / cellWidth);
  let y = Math.floor((event.clientY - rect.top) / cellHeight);
  if (x > 29) {
    x = 29;
  }

  if (y > 29) {
    y = 29;
  }

  if (grid[y][x] == 0) {
    // context.beginPath();
    // context.fillRect(x * cellWidth, y * cellHeight, cellWidth , cellHeight);
    // console.log("Paint in: " + x + "/" + y);
    // context.stroke();
    grid[y][x] = currentElement;
    // console.log(grid);
  } else {
    console.log(grid[y][x] + " " + x + "/" + y);
    console.log(grid);
  }
}

function element_switchTo(element){
  currentElement = element;
}

