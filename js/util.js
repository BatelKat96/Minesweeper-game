'use strict'


function countNegs(cellI, cellJ, mat) {
    var negsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= mat[i].length) continue
            if (mat[i][j].isMine) negsCount++
        }
    }
    if (!negsCount) return ''
    else return negsCount
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function drawNum(array) {
    var idx = getRandomInt(0, array.length)
    var num = array[idx]
    array.splice(idx, 1)
    return num
}


function boardCells(board) {
    var cells = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            cells.push(currCell)
        }
    }
    return cells
}

function timer() {
    ++totalSeconds;
    var elSec = document.querySelector('#seconds')
    var elMin = document.querySelector('#minutes')
    elSec.innerHTML = pad(totalSeconds % 60);
    elMin.innerHTML = pad(parseInt(totalSeconds / 60));
}


function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}