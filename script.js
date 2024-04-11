const containerHeader = document.querySelector(".container-header");
const containerGrid = document.querySelector(".container-grid");

const btnGridOnOff = document.querySelector(".btn-grid");
let grid = true;

function createGrid(size) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const square = document.createElement("div");
      square.classList.add("square");
      console.log(containerGrid.offsetHeight);
      square.style.height = `${containerGrid.offsetHeight / size}px`;
      square.style.width = `${containerGrid.offsetWidth / size}px`;

      console.log(containerGrid.offsetWidth);
      console.log(size);
      containerGrid.appendChild(square);
    }
  }
}

btnGridOnOff.addEventListener("click", function () {
  if (grid) {
    btnGridOnOff.style.transform = "rotate(70deg)";
    grid = false;
  } else {
    btnGridOnOff.style.transform = "rotate(0deg)";
    grid = true;
  }
});

createGrid(12);
