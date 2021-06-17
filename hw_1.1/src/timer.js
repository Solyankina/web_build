import {html, clearHtml} from "./utils.js";
import {Howl} from 'howler';

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

const sound = new Howl({
    src: ['alarm.wav']
});

function alertTimer() {
    play();
    showMessage();
}
function stopAlertTimer() {
    stopPlay();
    hideMessage();
}

function play() {
    sound.play();
}

function stopPlay() {
    sound.stop();
}

function showMessage() {
    html('message', "Время закончилось");
}

function hideMessage() {
    clearHtml("message");
}

