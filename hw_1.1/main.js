import {diffDates, diffToHtml} from "./datecalc.js";
import {formatError, html, clearHtml} from "./utils.js";
import {timer} from "./timer.js";
import {checkout} from "./checkoutlist.js";




const dateCalcForm = document.getElementById("datecalc");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    clearHtml('datecalc__result');
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        html('datecalc__result', diffToHtml(diff)); // 4
    }
    else html('datecalc__result', formatError("Для расчета промежутка необходимо заполнить оба поля")); // 5
}



checkout();
timer();

