'use strict'
var gCurrNum = 1;
var gCurrNums = getBoardSizeArray(getBoardSize());

function init() {
    renderBoard()
}

function closeWelcomeScreen() {
    var elWelcomeScreen = document.querySelector('.welcome-screen');
    elWelcomeScreen.style.display = 'none';
}

function renderBoard() {
    var elResetBtn = document.querySelector('.reset-btn')
    elResetBtn.style.display = 'none';
    var gLength = gCurrNums.length;
    var strHTML = '';
    var boardLength = Math.round(Math.sqrt(gLength));
    for (var i = 0; i < boardLength; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < boardLength; j++) {
            var num = drawNum(gCurrNums);
            strHTML += `<td onClick = "cellClicked(this)">${num}</td>`;
        }
        strHTML += '</tr>';
    }
    var elBoardBody = document.querySelector('.board');
    elBoardBody.innerHTML = strHTML;
}

function getBoardSize() {
    var elInputs = document.querySelectorAll('input');
    for (var i = 0; i < elInputs.length; i++) {
        if (elInputs[i].checked) {
            var currLength = elInputs[i].value;
        }
    }
    return currLength;
}


function getBoardSizeArray(length) {
    var nums = [];
    for (var i = 0; i < length; i++) {
        nums.push(i + 1);
    }
    return nums;
}


function resetGame() {
    gCurrNum = 1;
    clearInterval(gTimerIntervalId);
    var elNextNum = document.querySelector('.next-num');
    elNextNum.innerText = 'Next: 1'
    var elStopwatch = document.querySelector('.stopwatch');
    elStopwatch.innerText = '0.000';
    gCurrNums = getBoardSizeArray(getBoardSize());
    renderBoard();
}


function cellClicked(clickedNum) {
    var elResetBtn = document.querySelector('.reset-btn')
    var elNextNum = document.querySelector('.next-num');
    var currLength = getBoardSize();
    if (parseInt(clickedNum.innerText) === gCurrNum) {
        if (parseInt(clickedNum.innerText) === 1) {
            stopWatch();
        }
        clickedNum.classList.add('tdclicked');
        elNextNum.innerText = 'Next: ' + (gCurrNum + 1);
        gCurrNum++;
    }
    if (gCurrNum - 1 === parseInt(currLength)) {
        clearInterval(gTimerIntervalId);
        elNextNum.innerText = 'Done!'
        elResetBtn.style.display = 'block';
    }
}



var gTimerIntervalId;
function stopWatch() {
    var currTime = Date.now();
    var elStopwatch = document.querySelector('.stopwatch');
    gTimerIntervalId = setInterval(function () {
        var timePassed = Date.now() - currTime;
        elStopwatch.innerText = (timePassed / 1000);
    }, 100)
}



///////////////////////////////////////////////////////////////////////////////

function drawNum(numbers) {
    // debugger
    var idx = getRandomInt(0, numbers.length - 1)
    var num = numbers[idx]
    numbers.splice(idx, 1)
    return num
}


/////////////////////////////////////////////////////////////////////////////////

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
