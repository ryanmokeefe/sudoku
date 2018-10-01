// if input amount > 1 : change font size 10px, else font 30px


// // //


// generate game board + inputs
// rand num (x3-8 depending on difficulty level)
// for each num (n times) - push nums into row (checking column, row, box) 
//      - n = rand num between 1 - 7


// backtracking algorithm to solve

/////////////////

// Random numGen
function rand(min, max) {
    return Math.floor(Math.random() * max) + min;
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
// all:
    
var inputBoxes = document.getElementsByTagName("input")


// TODO: console error on load: box param = undefined
function inputAvailable(div) {
    if (div.value) {
        return false;
    } else {
        return true;
    }
}

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
        if (classList[i][0] == group) {
            list = document.getElementsByClassName(classList[i]);
        }
    }
    for (i = 0; i < list.length; i++) {
        if (list[i].value === num.toString())
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

        var amount = rand(1, 9);

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
