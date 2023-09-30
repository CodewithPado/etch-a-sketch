// Declare size variable
let size = 256;
// Create a DOM container element and square globally
let container_div = document.querySelector('.container');
let square_div; // DOM variable is used inside the function
// Create initial grid function with for loop creating a dom element 
function makeInitialGrid(){
  for(let i=0; i<size; i++){
    square_div = document.createElement('div');
    square_div.className= 'square';
    container_div.appendChild(square_div);
    /* Add an event listeners to the div to change and reset its values*/
    square_div.addEventListener('mouseover', randomColorRGB);
    square_div.addEventListener('mouseout',resetBgColor);
  }
  return size;
}

// To generate random color create r,g, & b values separately 
// Next add an event input since it will now be an event function 
function randomColorRGB(event){
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

/* Create a variable for the size of the overall grid and in your for loop create the elements so that they are new elements. Instead of having a global div element and appending the same element 256 times*/

/*Since flex-box is one dimensional I decided that I need to refactor my code from 2 for loops into one bigger for loop */