const containerGrid = document.querySelector(".container-grid");
const btnGridOnOff = document.querySelector(".btn-grid");
const rangeGrid = document.querySelector(".range-grid");
const colorPicker = document.querySelector(".input-color");
const btnClearAll = document.querySelector(".btn-clear");
const radioColorPicker = document.getElementById("color");

let squaresGrid;
let grid = true;
let initialGrid = 10;
let canColour = false;

document.addEventListener("mousedown", () => (canColour = true));
document.addEventListener("mouseup", () => (canColour = false));

btnGridOnOff.addEventListener("click", function () {
  if (grid) {
    btnGridOnOff.style.transform = "rotate(70deg)";
    grid = false;
    squaresGrid.forEach((sq) => sq.classList.remove("grid-on"));
  } else {
    btnGridOnOff.style.transform = "rotate(0deg)";
    grid = true;
    squaresGrid.forEach((sq) => sq.classList.add("grid-on"));
  }
});

btnClearAll.addEventListener("click", function () {
  squaresGrid.forEach((sq) => {
    sq.style.backgroundColor = `var(--baby-powder)`;
    sq.value = 0.1;
  });
});

rangeGrid.addEventListener("change", function () {
  createGrid(rangeGrid.value);
});

colorPicker.addEventListener("click", function () {
  radioColorPicker.checked = true;
});

function createGrid(size) {
  containerGrid.innerHTML = "";
  squareSize = 100 / size;
  for (let y = 0; y < size * size; y++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("grid-on");
    square.style.height = `${squareSize}%`;
    square.style.width = `${squareSize}%`;
    // Value used for progressive darkening later
    square.value = 0.1;

    containerGrid.appendChild(square);

    // Get a node list with all squares on the grid
  }

  squaresGrid = document.querySelectorAll(".square");
  colourSquare();
}

function colourSquare() {
  squaresGrid.forEach((sq) => {
    ["mousedown", "mouseover"].forEach(function (eventName) {
      sq.addEventListener(eventName, function () {
        if (!canColour && eventName !== "mousedown") return;

        const colorChoice = document.querySelector(
          ".color-choice:checked"
        ).value;

        if (colorChoice === "color") {
          sq.style.backgroundColor = `${colorPicker.value}`;
          sq.value = 0.1;
        }
        if (colorChoice === "eraser") {
          sq.style.backgroundColor = `var(--baby-powder)`;
          sq.value = 0.1;
        }
        if (colorChoice === "random") {
          sq.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 256
          )},${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
          )})`;
          sq.value = 0.1;
        }
        if (colorChoice === "progressive") {
          let increment = 0.1;
          sq.style.backgroundColor = `rgba(0,0,0,${(sq.value += increment)})`;
        }
      });
    });
  });
}

function init() {
  createGrid(initialGrid);
  rangeGrid.value = initialGrid;
}

init();
