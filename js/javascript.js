'use strict'

function openCalc() {
    const calcOpen = document.getElementById("calcOpen");
    calcOpen.style.opacity = "1";
}



function closeCalc() {
    const calcOpen = document.getElementById("calcOpen");
    calcOpen.style.opacity = "0";
}


function displayClear() {
    let displayLiveClear = document.getElementById("userInputLive");
    let displayHistoryClear = document.getElementById("userInputHistory");

    displayLiveClear.textContent = "";
    displayHistoryClear.textContent = "";

    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    result = 0;
    calcCheck = false;
    ended = false;
}



function inputLiveClear() {
    let displayLiveClear = document.getElementById("userInputLive");
    displayLiveClear.textContent = "";
}



function lastDigitClear() {
    let displayLiveClearLast = document.getElementById("userInputLive").textContent;
    displayLiveClearLast = displayLiveClearLast.slice(0, -1);
    let displayLiveReturn = document.getElementById("userInputLive");
    displayLiveReturn.textContent = displayLiveClearLast;
}



function inputDisplay(a) {
    let pushToDisplay = document.getElementById("userInputLive");
    pushToDisplay.textContent += a;
}



let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;
let calcCheck = false;
let ended = false;



function pullOperator(a) {
    let displayLive = document.getElementById("userInputLive");
    let displayHistory = document.getElementById("userInputHistory");
    let previousOperator = operator;
    operator = a;

    if (calcCheck == true) {
        secondNumber = Number(displayLive.textContent);
        if (operator == " + ") {
            result = (firstNumber + secondNumber);
        }
        else if (operator == " - ") {
            result = (firstNumber - secondNumber);
        }
        else if (operator == " * ") {
            result = (firstNumber * secondNumber);
        }
        else if (operator == " / ") {
            result = (firstNumber / secondNumber);
        }
        displayLive.textContent = "";
        displayHistory.textContent += secondNumber + " = " + result;
        firstNumber = result;
        secondNumber = 0;
        calcCheck = false;
        ended = true;
    }

    else {

        if (firstNumber == 0) {
            firstNumber = Number(displayLive.textContent);
            displayLive.textContent = "";
            displayHistory.textContent = firstNumber + operator;
        }
        else if (firstNumber > 0 && secondNumber == 0) {
            if (ended == true) {
                displayHistory.textContent += operator;
            }
            else {
                secondNumber = Number(displayLive.textContent);
                if (previousOperator == " + ") {
                    result = (firstNumber + secondNumber);
                }
                else if (previousOperator == " - ") {
                    result = (firstNumber - secondNumber);
                }
                else if (previousOperator == " * ") {
                    result = (firstNumber * secondNumber);
                }
                else if (previousOperator == " / ") {
                    result = (firstNumber / secondNumber);
                }
                firstNumber = result;
                displayLive.textContent = "";
                displayHistory.textContent += secondNumber + operator;
            }
        }
        else {
            secondNumber = Number(displayLive.textContent);
            if (previousOperator == " + ") {
                result = (firstNumber + secondNumber);
            }
            else if (previousOperator == " - ") {
                result = (firstNumber - secondNumber);
            }
            else if (previousOperator == " * ") {
                result = (firstNumber * secondNumber);
            }
            else if (previousOperator == " / ") {
                result = (firstNumber / secondNumber);
            }
            firstNumber = result;
            displayLive.textContent = "";
            displayHistory.textContent += secondNumber + operator;
        }
    }
}

function calculate() {
    let a = operator;
    calcCheck = true;
    pullOperator(a);
}