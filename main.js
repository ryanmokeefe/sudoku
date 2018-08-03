
function rand(min, max) {
    return Math.floor(Math.random() * max) + min;
}


// Create empty grid:

var createEmptyGrid = function() {
    for (i = 1; i <= 9; i++) {
        this["row" + i] = [];
        this["col" + i] = [];
        this["box" + i] = [];
    }
}

createEmptyGrid();





// Check for existing num:

var checkNum = function(array, num) {
    var available = true;
    if (available === true) {
        array.forEach(elem => {
            if (elem === num) {
                available = false;
            } else {
                return
            }
        });
    }
    return available;
}


// Fill first row:

        // NOT WORKING: 
        // checkNum(["col" + (i + 1)], num) && checkNum(["box" + (i + 1)], num)
        // use backtracking algorithm

function createRow(rowNum) {

    for (i = 0; i <= 8; i++) {
        while (rowNum[i] === undefined || rowNum[i] === null) {
            num = rand(1, 9);
            if (checkNum(rowNum, num)) {
                if (checkNum(["col" + (i + 1)], num)) {
                    rowNum[i] = num;
                    this["col" + (i + 1)].push(num);
                }
                   


        }}
    }
}

createRow(row1);
createRow(row2);
createRow(row3);
createRow(row4);
createRow(row5);
createRow(row6);
createRow(row7);
createRow(row8);
createRow(row9);




// TESTING:

console.log("ROWS:");

console.log(row1);
console.log(row2);
console.log(row3);
console.log(row4);

console.log("COLUMNS:");
console.log(col1);
console.log(col2);
console.log(col3);
console.log(col4);

console.log("BOXES:");
console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);
