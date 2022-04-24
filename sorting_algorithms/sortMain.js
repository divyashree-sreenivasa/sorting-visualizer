// Selecting size from the slider input
let arraySize = document.querySelector('#arrSize');

// Event listener to update the bars based on the slider value
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createBars(parseInt(arraySize.value));
});

// Default input for addDelay function (in milliseconds)
let delay = 260;
const delayThreshold = 1200;

// Selecting sorting speed from slider input
let delayInput = document.querySelector('#sortSpeed');
delay = delayThreshold - parseInt(delayInput.value);

// Event listener to update delay time based on slider input
delayInput.addEventListener('input', function(){
    console.log(delayInput.value, typeof(delayInput.value));
    delay = delayThreshold - parseInt(delayInput.value);
});

// Function to swap bars during sorting process
const swap = (el1,el2) => {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function addDelay(millisec=delay) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, millisec); 
    }) 
}

const printBarArr = (arr) => {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push(arr[i].style.height);
    }
    console.log(res);
}

function disableSortingButtons(state=false){
    const buttons = document.querySelectorAll('.sort-btn');
    buttons.forEach((btn) => btn.disabled = state);
}

// function disableInput(selector, state) {
//     document.querySelector(selector).disabled = state;
// }

function disableSizeSlider(state) {
    document.querySelector('#arrSize').disabled = state;
}

function disableNewArrayBtn(state) {
    document.querySelector('.new-array-btn').disabled = state;
}

// values for widths of bars and the blue color used for bars
const barWidth = '20px';
const colorBlue = '#03045e';
// the range [min, max] between which the bar heights will be
const max = 300, min = 50;

// create an array of n random numbers between [min, max]
const createNewArray = (n=50) => {
    
    const newArray = [];
    console.log('in create new array');
    
    for(let i=0; i<n; i++) {
        newArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(newArray);
    return newArray;
}


// create bars for the random numbers generated based on input from size slider
const createBars = (arrSize) => {
    console.log('in create bars');
    const arr = createNewArray(arrSize);
    const barDiv = document.querySelector('#bars');
    barDiv.innerHTML = '';
    for(let num of arr) {
        const newBar = document.createElement('div');
        newBar.classList.add('single-bar');
        newBar.style.height = `${num}px`;
        newBar.style.width = barWidth;
        barDiv.appendChild(newBar);
    }
}

const newArrayBtn = document.querySelector('.new-array-btn');
createBars(parseInt(arraySize.value));
newArrayBtn.addEventListener("click", () => {
    disableSortingButtons(false);
    disableSizeSlider(false);
    createBars(parseInt(arraySize.value));
});

