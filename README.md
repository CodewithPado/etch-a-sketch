# etch-a-sketch

## Table of Contents

- [etch-a-sketch](#etch-a-sketch)
  - [Table of Contents](#table-of-contents)
  - [Objective](#objective)
  - [My process](#my-process)
  - [Conclusion](#conclusion)

## Objective

Inspired by The Odin Project, I set out to create a dynamic and interactive sketch board with a grid layout. The goal was to leverage DOM manipulation and logic to enable users to customize the board's size, change the background color, and tap into their creativity by making drawings within the sketch board.

## My process

In making the etch-a-sketch board I did the following:

- Created and invoked functions
- Employed conditional if-else statements
- Created regular and dom variables
- Used the 'this' keyword to reference objects and elements in a context-aware manner
- Implemented template literals for string interpolation improving the code's readability
- Used for loops to iterate through elements efficiently
- Used onclick handlers and event listeners to enhance the user's experience

My algorithm goes as follows:
`// Create initial grid function(size) with for loop to create squares `
`// Query DOM elements `<br>
`// Use forEach to remove the previous grid (if any) before creating a new one `<br>
`// Change style of container to create a grid layout `<br>
`// Create grid variable to calculate total number of squares `<br>
`// Add event listener to the square div to change its background color `<br>
`// Create function changeSize with (input)  `<br>
`// Create input field in html to change the size of grid  `<br>
`// Use if-else conditionals to make sure the number is between 2 and 100 `<br>
`// If the input passes callback to the makeSketchPad function with (input) `<br>
`// If the input doesn't pass display an error text to the user`<br>
`// Create global color variable `<br>
`// Create global boolean variable to tell whether you're in coloring mode or not `<br>
`// Create changeColor function `<br>
`// Use the this keyword to grab the square_div to change background color `<br>
`// Create setColor function(choice) `<br>
`// Set HTML buttons to this function  `<br>
`/* Reset the grid by re-declaring the squares variable and using forEach to change the background color to white*/ `<br>
`// Add an event listener to the body to tell what mode you're in (on or off) `<br>
`// Assign click = !click `<br>

Later on, I added in two global variables. The color variable would be used in randomColor and changeColor(choice)functions. The click boolean variable would help the user
know if they were in coloring mode was on or off.
`let color = 'black'; ` <br>
`let click = true;  `<br>

First I created a `makeInitialGrid(size)`function designed to create a grid of squares within a container. In this function I initialized the DOM container element that creates where the grid will be created. If there existing square elements in the container they would be cleared by the `squares_div` variable. The container was styled to ensure there was a grid layout and the `square_div` variable had event listeners and styles attached to change the background color of the square div.
`function makeInitialGrid(size) { ` <br>
`let container_div = document.querySelector('.container'); `<br>
`let squares_div = document.querySelectorAll('square_div'); `<br>
`squares_div.forEach((div)=>div.remove()); `<br>
`` container_div.style.gridTemplateRows = `repeat(${size},1fr)`;  ``<br>
`` container_div.style.gridTemplateColumns = `repeat(${size},1fr)`;  ``<br>
`let grid = Math.pow(size, 2); `<br>
`for(let i=0; i<grid; i++) { `<br>
`let square_div = document.createElement('div'); `<br>
`square_div.style.backgroundColor = 'white'; `<br>
`square_div.addEventListener('mouseover', randomColor); `<br>
`container_div.insertAdjacentElement("beforeend",square_div); `<br>
`container_div.appendChild(square_div); `<br>
`} `<br>
`} `<br>
`makeInitialGrid(16); `<br>

The `changeSize` function responds to changes in the HTML input field. By first checking the input value, and input was valid, then the grid's size would change by calling another function (makeInitialGrid) with the input value now being the parameter. If the user's input is outside the valid range, it displays an error message to the user.
`let error_p=document.querySelector('.error'); `<br>
`function changeSize(input) { `<br>
`if(input>=2 && input<=100) { `<br>
`error_p.style.display = "none"; `<br>
`makeInitialGrid(input); `<br>
`}else {  `<br>
`error_p.style.display = "flex"; `<br>
`} `<br>
`} `<br>

Shortly after creating the function changeColor(choice), I created function randomColor(). This function determines the color of grid squares when the mouse hovers over them, based on the user's choice of color. This function checks whether one of the three colors (white, black or random) has been clicked by the user. If the random is selected, the square's background color is set to a random color using the HSL(Hue, Saturation, Lightness) color model. If the black or white buttons are selected, then the background is set to that color. used if-else conditionals, where it first checked if either the(white, black or random) buttons were clicked. If the random button was clicked, then the color variable's value would be random and this keyword was used to grab the square_div variable that listened for the event.
`function randomColor() { `<br>
`if(click) { `<br>
`if (color === 'random') { `<br>
`` this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;  `` <br>
`}else { `<br>
`this.style.backgroundColor = color; `<br>
`} `<br>
`} ` <br>
`} `<br>

I then created the function changeColor(choice). It updates the color variable to match the specified choice. The choice parameter is a string that represents the desired color for the button clicked.  
`function changeColor(choice) { `<br>
`color = choice; `<br>
`} `<br>

Next, I created the function resetGrid(), when the reset button is clicked it resets the grid by changing the background color of each square to white. This is done by re-declaring the `let squares_div` selecting all of the elements on the page. It then utilizes the `forEach` method to iterate through each `div` and set its background color to white, effectively resetting the color of every grid square.
`function resetGrid() { `<br>
`let squares_div = document.querySelectorAll('div'); `<br>
`squares_div.forEach((div)=>(div.style.backgroundColor = 'white')); `<br>
`} `<br>

Finally, I implemented user feedback by adding an event listener to the document body to listen for clicks anywhere on the page. When a click event is detected, the function checks if the clicked element is not a `<button>,` ensuring that it doesn't interfere with other button interactions. If the click isn't a button, it toggles the coloring mode on or off by changing the click variable's state. Displayed back in text to the user. Either "Coloring: On" or "Coloring: Off".
`document.querySelector('body').addEventListener("click",(e)=> { `<br>
`if(e.target.tagName != 'BUTTON') { `<br>
`click = !click; `<br>
`if(click) { `<br>
`document.querySelector(".draw").textContent = "Coloring: On"; `<br>
`}else { `<br>
`document.querySelector(".draw").textContent = "Coloring: Off"; `<br>
`} `<br>
`} `<br>
`}); `<br>

## Conclusion

This project, along with the others in The Odin Project, have been instrumental to my development as a novice programmer. Through this project, I gained valuable insights into function invocation, parameter updates, and DOM manipulation. I learned how to use the 'this' keyword and gained more experience manipulating the DOM. I look forward to creating more projects and further advancing my development as a programmer.
