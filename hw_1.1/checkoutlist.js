
export function checkout() {
    const dateCalcForm = document.getElementById("datecalc");
    const timerForm = document.getElementById("timerForm");

    const checkoutDateCalc = document.getElementById("checkoutDateCalc");
    const checkoutTimer = document.getElementById("checkoutTimer");

    checkoutDateCalc.addEventListener("click", function (){
        toggle(dateCalcForm, timerForm)
    });

    checkoutTimer.addEventListener("click", function (){
        toggle(timerForm, dateCalcForm)
    });

    function toggle(show, hide) {
        if (show.hasAttribute('hidden')) {
            show.removeAttribute('hidden');
            hide.setAttribute('hidden', '');
        }
    }
}




