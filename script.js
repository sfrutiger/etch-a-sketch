//create grid////////////
var gridSize = 65;
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  //create empty pixels
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", "pixel" + (c + 1));
    container.appendChild(cell).className = "gridItem";
  };
  //change color of pixels
  var elements = document.getElementsByClassName('gridItem')
    for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function (event) {
    event.target.className = "gridItemOn";
  })
}
};
makeRows(gridSize, gridSize);


//clear board on button click function
function resetBoard() {
   var onPixels = document.getElementsByClassName("gridItemOn");
    for(var i = (onPixels.length - 1); i >= 0; i--)
    {
        onPixels[i].className = "gridItem";
    }
};

function removeElementsByClass(){
    const elements = document.getElementsByClassName("gridItem");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//clear and redraw board with user selected size
const clearbtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
  resetBoard();
  removeElementsByClass();
  makeRows (gridSize, gridSize);
  });

