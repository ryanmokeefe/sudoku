// if input amount > 1 : change font size 10px, else font 30px


// // //


// generate game board + inputs
// rand num (x3-8 depending on difficulty level)
// for each num (n times) - push nums into row (checking column, row, box) 
//      - n = rand num between 1 - 7


// backtracking algorithm to solve

var grid = document.getElementsByClassName("grid")[0];
var rowBoardArray = [];
// var rowArray = [];
// var colArray = [];
// var boxArray = [];


var createEmptyGrid = function() {
    for (i = 1; i <= 9; i++) {
        this["rowArray" + i] = [];
        this["colArray" + i] = [];
        this["boxArray" + i] = [];
    }
}

createEmptyGrid();



// var gameboard  = function() {
//     // row
//     for (var i = 0; i < 9; i++) {
//         var row = document.createElement("div")
//         // collumn
//         for (var x = 0; x < 9; x++) {
//             var input = document.createElement('input') 
//             input.setAttribute('type', 'text')
//             input.className = "input row" + i + " col" + x 
//             row.appendChild(input)
//             }
//         rowBoardArray.push(row)
//         grid.appendChild(row)    
//         }
//     }

// gameboard()

// var all = document.getElementsByClassName("input")
// allArray = Array.from(all)
// console.log(allArray)
// allArray.map(function (i) {
//     classes = i.classList();
//     print(classes)

// });


// console.log(all)

/////////////////

// Random numGen
function rand(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// TODO: console error on load: box param = undefined
function inputAvailable(div) {
    if (div.value) {
        return false;
    } else if (!div.value || div.value === undefined) {
        return true;
    }
}

// Columns: 
for (i = 1; i <= 9; i++) {
    
    this["col" + i] = document.getElementsByClassName("col" + i)
}
// Rows:
for (i = 1; i <= 9; i++) {
    
    this["row" + i] = document.getElementsByClassName("row" + i)
}
// Boxes:
for (i = 1; i <= 9; i++) {
    
    this["box" + i] = document.getElementsByClassName("box" + i)
}
// // all:
    
var inputBoxes = document.getElementsByTagName("input")



// function returnClass(div, name) {
//     var list = div.classList;
//     for (i = 0; i < list.length; i++) {
//         if (list[i][0] == "r") {
//             return list[i];
//         }
//     }
// }


// Check each for Available:
var groupAvailable = function(div, num, group) {
    var list;
    var classList = div.classList;
    var bool = true;
    for (i = 0; i < classList.length; i++) {
        // Collecting classNames of only ROW, COL, BOX
        if (classList[i][0] == group) {
            list = document.getElementsByClassName(classList[i]);
        }
    }
    for (i = 0; i < list.length; i++) {
        // Checking all of className's array (ie: row4)
        var groupToCheck = document.getElementsByClassName(list[i]);
        for (x = 0; x < groupToCheck[i]; x++) 
        if (groupToCheck[i].value === num.toString())
        {bool = false}
    }
    return bool;

}


// allAvailable()
var allAvailable = function(input, num) {
    if (groupAvailable(input, num, "r") && groupAvailable(input, num, "c") && groupAvailable(input, num, "b")) 
    { return true; } 
    else { return false; }
}

// start with 8 nums generated
function generateNumbers() {
    for (i = 1; i <= 9; i++) {
        // var numToPush = i; 

        // var amount = rand(1, 9);
        var amount = 8;
        for (i = 0; i < amount; i++) {
            var boxNum = rand(0, 80);
            // check if box is available
            if (inputAvailable(inputBoxes[boxNum]) && allAvailable(inputBoxes[boxNum], i)) {
                inputBoxes[boxNum].value = i
            }
        }
    }
}


generateNumbers();

// console.log("ROWS: " + rowArray)
// console.log("COLS: " + colArray)