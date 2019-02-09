var grid = document.getElementsByClassName("grid")[0];
var allRows = [];
var allCols = [];
var allBoxes = [];

var allInput = document.getElementsByTagName("input");

var createEmptyGrid = function() {
    for (i = 1; i <= 9; i++) {
        this["rowArray" + i] = [];
        this["colArray" + i] = [];
        this["boxArray" + i] = [];
    }
};

createEmptyGrid();

// Random numGen
function rand(min, max) {
    return Math.floor(Math.random() * max) + min;
};

// TODO: console error on load: box param = undefined
function inputAvailable(div) {
    if (div.value) {
        return false;
    } else if (!div.value || div.value === undefined) {
        return true;
    }
};



// for (i = 0; i < 9; i++) {
//     var currentRow = ["rowArray" + i];
//     for (x = 0; x < currentRow.length; x++) {
//         ["colArray" + x].push(currentRow[x]); 
//     }
// }
