// Create initial grid function(size) with for loop to create squares
function makeInitialGrid(size){
  // Query DOM container element and a square div variable for all div's
  let container_div = document.querySelector('.container');
  let squares_div = document.querySelectorAll('square_div');
  // Use forEach to remove the previous grid (if any) before creating a new one
  squares_div.forEach((square_div)=>square_div.remove());
  // Change style of grid 
  container_div.style.gridTemplateRows = `repeat(${size},1fr)`;
  container_div.style.gridTemplateColumns= `repeat(${size},1fr)`;
  // Create a total grid variable
  let grid = size * size; 
  for(let i=0; i<grid; i++){
    let square_div = document.createElement('div');
    square_div.style.backgroundColor= 'lightblue';
    container_div.insertAdjacentElement("beforeend",square_div);
    container_div.appendChild(square_div);
    // Add an event listeners to the div to change and reset its values
    square_div.addEventListener('mouseover', randomColorRgb);
    square_div.addEventListener('mouseout',resetBgColor);
  }
}
makeInitialGrid(16);

// To generate random color create r,g, & b values separately 
// Next add an event input since it will now be an event function 
function randomColorRgb(e){
  let r= Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return e.target.style.color =`rgb(${r},${g},${b})`;
}

// Reset background to default by setting it equal to a blank value
function resetBgColor(e){
  return e.target.style.color= '';
}

// Create button/grab button from HTML
let button_btn = document.querySelector('.btn');

// Add an event listener that waits for the button to be clicked
button_btn.addEventListener('click', changeGridSize);

// Create a variable asking for user input on the grid size
/* Create a isValid function to ask for user input and check to see if it's valid using if-else conditionals*/
function changeGridSize(input){
  //let userInput = (prompt("Enter a number between 1 and 100", ));
  //input = parseInt(userInput);
  /*Swap out prompt for a user input field */
  if(input>=1 && input<=100){
    makeInitialGrid(input);
  }
  else{ 
    alert("Please enter a correct value");
  }
}

//Make a function to change you could do it with a constructor function
// Re-use the (mouseover/mouseout) event listeners for the custom grid
function randomColorRgb(event){
  let r= Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return event.target.style.backgroundColor =`rgb(${r},${g},${b})`;
}

// Reset background to default by setting it equal to a blank value
function resetBgColor(event){
  return event.target.style.backgroundColor= '';
}

/* You're allowed to have the same function have two different parameter variables  function changeGridSize takes userInput and if the input is valid uses the makeInitial function but instead of (size) it swaps it for (input)!!!!*/

/* MISC.NOTES WHILE FIGURING OUT HOW TO CREATE THE CUSTOM USER GRID FUNCTION:
If valid input, then find a way to remove/clear old grid function and add the new function (The input must be a number 1-100) the max being 100*100, the min being 1*1. Do this by implementing if-else conditionals
Use the event listeners from above for changing the background color*/

/*MISC.NOTES WHILE FIGURING OUT HOW TO CREATE THE CUSTOM USER GRID FUNCTION:
If valid input, then find a way to remove/clear old grid function and add the new function (The input must be a number 1-100) the max being 100*100, the min being 1*1. Do this by implementing if-else conditionals
Use the event listeners from above for changing the background color*/

/*function makeCustomGrid(){
  for(let i=0; i<customSize;i++){
    let customSquare_div = document.createElement('div');
    customSquare_div.className = 'custom-square';
    customContainer_div.appendChild(customSquare_div);
    customSquare_div.addEventListener(mouseover,randomColorRgb);
    customSquare_div.addEventListener(mouseout,resetBgColor);
  }
  return customSize;
}
function isValid(){
  let userInput = (prompt("Enter a number between 1 and 100", ));
  let customSize= parseInt(userInput);
  if(isNaN(customSize)|| customSize> 100 || customSize<1){
    alert("Please enter a correct value");
  }
  else{ 
    // Remove the parent element of the default grid container
    container_div.remove();
    // Pass customSize as an argument to the makeCustomGrid function
    makeCustomGrid();
  }
}*/

/*The reason why you would you style the DOM container with the template literals of variable numbers rows and columns, before the for loop instead of inside it. Is because you already have the number for the rows and columns,before you create the div's inside the container. Furthermore, you want the container to be set up even with rows and lines before creating the squares inside the for loop*/



/*// Declare size variable
let size =16;
// Create a global squared function
const squared = (size)=> size * size;
let result = squared(size);
// Create a global DOM container element 
let container_div = document.querySelector('.container');
container_div.style.gridTemplateRows=`repeat(${size},1fr)`;  
container_div.style.gridTemplateColumns=`repeat(${size},1fr)`;
// Create initial grid function with for loop creating a square dom element 
function makeInitialGrid(){
  for(let i=0; i<result; i++){
    let square_div = document.createElement('div');
    square_div.className= 'square';
    container_div.appendChild(square_div);
    // Add an event listeners to the div to change and reset its values
    square_div.addEventListener('mouseover', randomColorRgb);
    square_div.addEventListener('mouseout',resetBgColor);
  }
}

// To generate random color create r,g, & b values separately 
// Next add an event input since it will now be an event function 
function randomColorRgb(event){
  let r= Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return event.target.style.backgroundColor =`rgb(${r},${g},${b})`;
}

// Reset background to default by setting it equal to a blank value
function resetBgColor(event){
  return event.target.style.backgroundColor= '';
}
makeInitialGrid();

// Create button/grab button from HTML
let button_btn = document.querySelector('.btn');

// Add an event listener that waits for the button to be clicked
button_btn.addEventListener('click', makeCustomGrid);

// Create a variable asking for user input on the grid size
 Create a isValid function to ask for user input and check to see if it's valid using if-else conditionals*/
/*function isValid(){
  let userInput = (prompt("Enter a number between 1 and 100", ));
  size = parseInt(userInput);
  if(isNaN(size)|| size> 100 || size<1){
     alert("Please enter a correct value");
     return undefined;
  }
  else{ 
    return size;
  }
}*/

// Create a make grid function 
/*function makeCustomGrid(){
  isValid();
  container_div.style = '';
  container_div.style.gridTemplateRows=`repeat(${size},1fr)`;
  container_div.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
  for(let i=0; i<result; i++){
    let square_div = document.createElement('div');
    square_div.className= 'square';
    container_div.appendChild(square_div);
    // Add an event listeners to the div to change and reset its values
    square_div.addEventListener('mouseover', randomColorRgb);
    square_div.addEventListener('mouseout',resetBgColor);
  } 
}*/
/*
function makeCustomGrid(){
  isValid();
  // Remove container div and then readd it for a clean slate grid
  document.body.removeChild(container_div);
  container_div = document.createElement('div');
  container_div.className = 'custom-container';
  document.body.appendChild(container_div);
  // Add grid styles back to DOM container
  container_div.style.gridTemplateRows=`repeat(${size},1fr)`;
  container_div.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    // Use squared function 
    // Create a custom square dom element for both row and column give them a class
  for(i=0;i<result;i++){
    let cSquare_div = document.createElement('div');
    cSquare_div.className = 'custom-square';
    container_div.appendChild(cSquare_div);
    cSquare_div.addEventListener('mouseover', randomColorRgb);
    cSquare_div.addEventListener('mouseout', resetBgColor);
  }
}*/