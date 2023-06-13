

// Clear input form when page is loaded
function clearInitialText(e) {
    e.preventDefault();
    const newField1 = document.getElementById('number');
    newField1.value = '';
    const newField2 = document.getElementById('num');
    newField2.value = '';
    const newField3 = document.getElementById('gen');
    newField3.value = '';
}
window.addEventListener('DOMContentLoaded', clearInitialText);

// Enable Search and Sort

const enableSearchSort = () => {
    console.log('Search and Sort enabled');
    document.getElementById('num').disabled = false;
    document.getElementById('numbr').disabled = false;
    document.getElementById('numbr').classList.remove('disabled');
    document.getElementById('search').disabled = false;
    document.getElementById('sort').disabled = false;
    document.getElementById('submit-select').disabled = false;
    document.getElementById('submit-select').classList.remove('disabled');
    document.getElementById('submit-sort').disabled = false;
    document.getElementById('submit-sort').classList.remove('disabled');
}

// Disable Sort

const disableSort = () => {
    console.log('disable search');
    document.getElementById('sort').disabled = true;
    document.getElementById('submit-sort').disabled = true;   
    document.getElementById('submit-sort').classList.add('disabled');
}

// Disable Search

const disableSearch = () => {
    console.log('enable sort');
    document.getElementById('num').disabled = true;
    document.getElementById('numbr').disabled = true;
    document.getElementById('numbr').classList.add('disabled');
    document.getElementById('submit-select').classList.add('disabled');
    // document.getElementById('search').disabled = true;
    // document.getElementById('submit-select').disabled = true;
}

// Search and Sort section disabled when the page loads

const disableSearchSort = () => {
    console.log('Search and Sort disabled');
    document.getElementById('num').disabled = true;
    document.getElementById('numbr').disabled = true;
    document.getElementById('numbr').classList.add('disabled');
    document.getElementById('search').disabled = true;
    document.getElementById('sort').disabled = true;
    document.getElementById('submit-select').disabled = true;
    document.getElementById('submit-select').classList.add('disabled');
    // document.getElementById('submit-select').className += ' disabled';
    // document.querySelector('input[id="submit-select"]').classList.add('disabled');


    document.getElementById('submit-sort').disabled = true;
    document.getElementById('submit-sort').classList.add('disabled');
}

window.addEventListener('load', disableSearchSort());

const clearPreviousResult = () => {
    console.log('clear previous result');
    document.getElementById('selectResult').style.visibility = "hidden";
    document.getElementById('sortResult').style.visibility = "hidden";
}

const showNewResultSort = () => {
    console.log('clear previous result');
    // document.getElementById('selectResult').style.visibility = "visible";
    document.getElementById('sortResult').style.visibility = "visible";
}

const showNewResultSearch = () => {
    console.log('clear previous result');
    document.getElementById('selectResult').style.visibility = "visible";
    // document.getElementById('sortResult').style.visibility = "visible";
}

// Declare form variables

const enterNumbers = document.getElementById('enter-numbers');
const validateRandom = document.getElementById('validate-random');

// Get the value of the input with Add button and Enter 

let finalArr = [];
let myArr = [];
let myArr1 = [];

function getArray(e) {
    e.preventDefault();
    let value = document.getElementById('number').valueAsNumber;
    if (!Number.isInteger(value)) {
        alert('Please enter a number');
    } else {
        myArr[myArr.length] = value;
        console.log(myArr);
        return myArr;
    }
}
// press Enter 
document.getElementById('enter-numbers').addEventListener('submit', getArray);
// press Add button 
document.getElementById('add').addEventListener('click', getArray);

// Display the array
// function showArray() {
//     document.getElementById('display').innerHTML = myArr;
// }
// document.getElementById('show').addEventListener('click', showArray);


function showArray() {
    if (myArr.length === 1) {
        finalArr = myArr;
        const displayGenArray = finalArr.join(' ');
        // document.getElementById('display').innerHTML = finalArr;
        document.getElementById('display').innerHTML = displayGenArray;
        alert("You can't do much with an array of 1 element");
    } 
    if (myArr.length > 1) {
        finalArr = myArr;
        const displayGenArray = finalArr.join(' ');
        document.getElementById('display').innerHTML = displayGenArray;
    }
    if (myArr.length < 1) {
        alert('Please add array elements first');
    }
}
document.getElementById('show').addEventListener('click', showArray);
document.getElementById('show').addEventListener('click', enableSearchSort);


// Generate a random array
let size;
function getSize(e) {
    e.preventDefault();
    size = document.getElementById('gen').valueAsNumber;
    if (!size || size < 1) {
        alert('Please enter a positive number');
        return;
    }
    if (size < 2) {
        alert("You can't do much with an array of 1 element");
    } else {
        document.getElementById('validated').innerHTML = `array size is ${size}`;
        console.log(size); 
    }
}
document.getElementById('validate-random').addEventListener('submit', getSize);
document.getElementById('validate').addEventListener('click', getSize);

document.getElementById('validate').addEventListener('click', clearPreviousResult);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const genRand = () => {
    myArr1 = [];
    for (let i = 0; i < size; i++) {
        // myArr1[i] = getRandom(0, 100);
        myArr1[i] = Math.floor(Math.random() * 200 - 100);
    }
    // finalArr = myArr1.join(' ');
    finalArr = myArr1;
    const displayRandArray = finalArr.join(' ');
    document.getElementById('random').innerHTML = displayRandArray;
    // document.getElementById('random').innerHTML = finalArr;
    // return myArr;
};

document.getElementById('generate').addEventListener('click', clearPreviousResult);
document.getElementById('generate').addEventListener('click', enableSearchSort);
document.getElementById('generate').addEventListener('click', genRand);
document.getElementById('generate').addEventListener('click', () => {
    if (!size) {
        alert('Please validate your array size first');
    }
});

const enableLinearSearch = () => {
    document.querySelector('select[name="selectList"] option[value="linear"]').disabled = false;
}
document.getElementById('generate').addEventListener('click', enableLinearSearch);

// Disable enter-numbers form

const disableEnter = () => {
    // console.log(enterNumbers);
    // console.log(enterNumbers.querySelectorAll('form > *'));
    enterNumbers.querySelectorAll('form > *').forEach(elem => {
        elem.disabled = true;
    });
    document.getElementById('add').disabled = true;
    document.getElementById('add').classList.add('disabled');
    document.getElementById('show').disabled = true;
    document.getElementById('show').classList.add('disabled');
};
document.getElementById('gen').addEventListener('click', disableEnter);

// Disable validate-random form

const disableRandom = () => {
    validateRandom.querySelectorAll('form > *').forEach(elem => {
        elem.disabled = true;
    });
    document.getElementById('validate').disabled = true;
    document.getElementById('validate').classList.add('disabled');
    document.getElementById('generate').disabled = true;
    document.getElementById('generate').classList.add('disabled');
};
document.getElementById('number').addEventListener('click', disableRandom);

// Arrow Function for addEventListener

// document.getElementById('gen').addEventListener('click', () => {
//     console.log('called');
// });

// Reset Button

const refreshPage = () => {
    location.reload();
};

document.getElementById('reset').addEventListener('click', refreshPage);

// // Search and Sort section disabled when the page loads

// const disableSearchSort = () => {
//     console.log('Search and Sort disabled');
//     document.getElementById('num').disabled = true;
//     document.getElementById('numbr').disabled = true;
//     document.getElementById('search').disabled = true;
//     document.getElementById('sort').disabled = true;
//     document.getElementById('submit-select').disabled = true;
//     document.getElementById('submit-sort').disabled = true;
// }

// window.addEventListener('load', disableSearchSort());




// Get the searched number

let search;

function searchNumber(e) {
    e.preventDefault();
    search = document.getElementById('num').valueAsNumber;

    if (!Number.isInteger(search)) {
        alert('Please enter a number');
    } else {
        document.getElementById('showArr').innerHTML = `searched number: ${search}`;
    }
    // return search;
}
// press Enter 
document.getElementById('search-number').addEventListener('submit', searchNumber);
// press Add button 
document.getElementById('numbr').addEventListener('click', searchNumber);

// Search Validation

function searchValidation() {
    if(!Number.isInteger(search)) {
        alert('Please validate your search first');
    }
}

// Linear Search

function linearSearch() {
    // console.log(search);
    // console.log(typeof search);
    if (Array.isArray(finalArr)) {
        for (let i = 0; i < finalArr.length; i++) {
            console.log(finalArr[i]);
            if (finalArr[i] === search) {
                return document.getElementById('selectResult').innerHTML = `${search} found in array at position ${i + 1}`;
            }
        }
        if(!Number.isInteger(search)) {
            document.getElementById('selectResult').innerHTML = 'Please enter a number to search for';
        } else {
            document.getElementById('selectResult').innerHTML = `${search} not found in array`;
        }
        
    } else {
        console.log('No valid array');
    }
}
// document.getElementById('search').addEventListener('click', linearSearch);

document.getElementById('numbr').addEventListener('click', disableSort);

// smallest
const small = () => {
    let index = 0;
    for (let i = 1; i < finalArr.length; i++) {
        if (finalArr[index] > finalArr[i]) {
            index = i;
        }
    }
    document.getElementById('selectResult').innerHTML = `smallest element of the array is ${finalArr[index]}`;
}

// highest
const high = () => {
    let index = 0;
    for (let i = 1; i < finalArr.length; i++) {
        if (finalArr[index] < finalArr[i]) {
            index = i;
        }
    }
    document.getElementById('selectResult').innerHTML = `highest element of the array is ${finalArr[index]}`;
}

// Select Form with addEventListener for Search

const searchForm = document.getElementById('selectForm');

const searchingForm = function(event) {
    let selectSort = document.getElementById('search');

    switch(selectSort.value) {
        case 'linear': 
            linearSearch();
            searchValidation();
            console.log('linear search'); 
            break;
        case 'smallest':
            small();
            console.log('smallest element');
            break;
        case 'highest': 
            high();
            console.log('highest element');
            break;
        default: console.log('unknown');
    }
    event.preventDefault();
};

searchForm.addEventListener('submit', searchingForm);
document.getElementById('submit-select').addEventListener('click', showNewResultSearch);



// Selection Sort

function selectionSort() {

    if (Array.isArray(finalArr)) {
        for (let i = 0; i < finalArr.length - 1; i++) {
            for (let j = i + 1; j < finalArr.length; j++) {
                if (finalArr[i] > finalArr[j]) {
                    let temp = finalArr[i];
                    finalArr[i] = finalArr[j];
                    finalArr[j] = temp;
                }
            }
        }
        // console.log(myArr);
        // document.getElementById('sortResult').innerHTML = finalArr;
        const displaySelectionArray = finalArr.join(' ');
        document.getElementById('sortResult').innerHTML = displaySelectionArray;
    }
}

const bubbleSort = () => {
    
    if (Array.isArray(finalArr)) {
        for (let i = 0; i < finalArr.length - 1; i++) {
            for (let j = 0; j < finalArr.length - i - 1; j++) {
                if (finalArr[j] > finalArr[j + 1]) {
                    let temp = finalArr[j];
                    finalArr[j] = finalArr[j + 1];
                    finalArr[j + 1] = temp;
                }
            }
        }
        // console.log(myArr);
        // document.getElementById('sortResult').innerHTML = finalArr;
        const displayBubbleArray = finalArr.join(' ');
        document.getElementById('sortResult').innerHTML = displayBubbleArray;
    }
}

// Select Form

// const sortForm = document.getElementById('sortForm');

// sortForm.onsubmit = function(event) {
//     let selectSort = document.getElementById('sort');

//     switch(selectSort.value) {
//         case 'linear': 
//             linearSearch();
//             console.log('linear search'); 
//             break;
//         case 'selection':
//             selectionSort();
//             console.log('selection sort');
//             break;
//         case 'bubble': 
//             bubbleSort();
//             console.log('bubble sort');
//             break;
//         default: console.log('unknown');
//     }
//     event.preventDefault();
// };


// Select Form with addEventListener for Sorting

const sortForm = document.getElementById('sortForm');

const sortingForm = function(event) {
    let selectSort = document.getElementById('sort');

    switch(selectSort.value) {
        case 'selection':
            selectionSort();
            console.log('selection sort');
            break;
        case 'bubble': 
            bubbleSort();
            console.log('bubble sort');
            break;
        default: console.log('unknown');
    }
    event.preventDefault();
};

sortForm.addEventListener('submit', sortingForm);

document.getElementById('submit-sort').addEventListener('click', showNewResultSort);
document.getElementById('submit-sort').addEventListener('click', disableSearch);

// Disable linear search using a straightforward selector

// const disableLinearSearch = () => {
//     document.getElementById('search').querySelectorAll('select > *').forEach(option => {
//         if (option.value === 'linear') {
//             document.querySelector('select[name="selectList"] option[value="linear"]').disabled = true;
//         }
//     })
// };

// Disable linear search using a straightforward selector short version

const disableLinearSearch = () => {
    document.querySelector('select[name="selectList"] option[value="linear"]').disabled = true;
    document.getElementById('submit-select').classList.remove('disabled');
}

document.getElementById('submit-sort').addEventListener('click', disableLinearSearch);

// Using map() generically on a NodeList

// const elems = document.querySelectorAll('option');
// console.log(elems);
// const values = Array.prototype.map.call(elems, ({ value }) => value);
// console.log(values);

