var grid = document.getElementsByClassName("grid")[0];


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
        var numToPush = i; 
        // var amount = rand(1, 9);
        var amount = 9;

        for (x = 0; x < amount; x++) {
            var boxNum = rand(0, 80);

            // check if box is available
            if (inputAvailable(inputBoxes[boxNum]) && allAvailable(inputBoxes[boxNum], i)) {
                // overwriting with 9 (last number called)
                inputBoxes[boxNum].value = i;
            }
        }
    }
}


generateNumbers();



