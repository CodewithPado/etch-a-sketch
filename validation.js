// Create global color variable
let color = "black";
// Create global boolean variable to tell whether you're in coloring mode or not
let click = true;

// Create initial grid function(size) with for loop to create squares
function makeInitialGrid(size) {
  // Query DOM elements container and squares
  let container_div = document.querySelector(".container");
  let squares_div = document.querySelectorAll("square_div");
  // Use forEach to remove the previous grid (if any) before creating a new one
  squares_div.forEach((div) => div.remove());
  // Change style of container to create a grid layout
  container_div.style.gridTemplateRows = `repeat(${size},1fr)`;
  container_div.style.gridTemplateColumns = `repeat(${size},1fr)`;
  // Create grid variable to calculate total number of squares
  let grid = Math.pow(size, 2);
  for (let i = 0; i < grid; i++) {
    let square_div = document.createElement("div");
    square_div.style.backgroundColor = "white";
    // Add event listener to the square div to change its background color
    square_div.addEventListener("mouseover", randomColor);
    container_div.insertAdjacentElement("beforeend", square_div);
    container_div.appendChild(square_div);
  }
}
makeInitialGrid(16);

// Create function changeSize with (input)
// Create input field in html to change the size of grid
// Use if-else conditionals to make sure the number is between 2 and 100
// If the input passes callback to the makeSketchPad function with (input)
// Replace the alert function with a more user-friendly error variable
// Use display:none and display:flex to change visibility of error text
let error_p = document.querySelector(".error");
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    error_p.style.display = "none";
    makeInitialGrid(input);
  } else {
    error_p.style.display = "flex";
  }
}

// Create changeColor function
// Use if-else conditionals to see if random button is clicked
// Use the this keyword to grab the square_div to change background color
function randomColor() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
// Create setColor function(choice)
// Set HTML buttons to this function
function changeColor(choice) {
  color = choice;
}

/* Reset the grid by passing re-declaring the squares variable and using forEach to change the background color to white*/
function resetGrid() {
  let squares_div = document.querySelectorAll("div");
  squares_div.forEach((div) => (div.style.backgroundColor = "white"));
}

// Add an event listener to the body to tell what mode you're in (on or off)
// Assign click = !click
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".draw").textContent = "Coloring: On";
    } else {
      document.querySelector(".draw").textContent = "Coloring: Off";
    }
  }
});
