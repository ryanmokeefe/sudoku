
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
    var available;
    array.forEach(function(e) {
        if (e === num) {
            available = false;
        } else {
            // return
            available = true;
        }
    })

    return available;
}



// // Fill first row:

//         // NOT WORKING: 
//         // checkNum(["col" + (i + 1)], num) && checkNum(["box" + (i + 1)], num)
//         // use backtracking algorithm

function createRow(rowNum) {

    for (i = 0; i <= 8; i++) {
        if (rowNum[i] === undefined || rowNum[i] === null) {
            num = rand(1, 9);
            if (checkNum(rowNum, num)) {
                colCheck = checkNum(["col" + (i + 1)], num) 
                if (colCheck) {
                    rowNum.push(num);
                    this["col" + (i + 1)].push(num);
                } else {
                    // this["col" + (i + 1)].pop();
                    rowNum[i] = undefined
                    
                }
            }
        }
    }
}

// create first row - eliminate nums from all matching cols & boxes












createRow(row1);
createRow(row2);
createRow(row3);
createRow(row4);
createRow(row5);
createRow(row6);
createRow(row7);
createRow(row8);
createRow(row9);




// // TESTING:

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

// console.log("BOXES:");
// console.log(box1);
// console.log(box2);
// console.log(box3);
// console.log(box4);





// // //


// generate game board + inputs
// rand num (x3-8 depending on difficulty level)
// for each num (n times) - push nums into row (checking column, row, box) 
//      - n = rand num between 1 - 7


// backtracking algorithm to solve


// solve(game):
//     if (game board is full)
//         return SUCCESS
//     else
//         next_square = getNextEmptySquare()
//         for each value that can legally be put in next_square
//             put value in next_square (i.e. modify game state)
//             if (solve(game)) return SUCCESS
//             remove value from next_square (i.e. backtrack to a previous state)
//     return FAILURE