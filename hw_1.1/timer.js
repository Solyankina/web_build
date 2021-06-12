import {html, clearHtml} from "./utils.js";

export function timer() {
    const timerInput = document.getElementById("time");
    const buttonStartTimer = document.getElementById("button__start");
    const buttonStopTimer = document.getElementById("button__stop");

    let timeMinute = 0;
    let timerIsStarted = false;

    buttonStartTimer.addEventListener('click', function () {
        timeMinute = parseInt(timerInput.value) * 60
        timerIsStarted = true;
    })

    buttonStopTimer.addEventListener('click', function () {
        timerIsStarted = false;
        stopAlertTimer();
    })

    let timer = setInterval(function () {

        const seconds = timeMinute % 60
        const minutes = timeMinute / 60 % 60
        const hour = timeMinute / 60 / 60 % 60
        if (timerIsStarted) {
            if (timeMinute <= 0) {
                clearInterval(timer);
                alertTimer();
            } else {
                html('timer', `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`) ;
            }
        }
        --timeMinute;
    }, 1000)

}

function alertTimer() {
    play();
    showMessage();
}
function stopAlertTimer() {
    stopPlay();
    hideMessage();
}

function play() {
    html('wave', "<audio src=\"alarm.wav\" autoplay></audio>");
}

function stopPlay() {
    clearHtml('wave');
}

function showMessage() {
    html('message', "Время закончилось");
}

function hideMessage() {
    clearHtml("message");
}

