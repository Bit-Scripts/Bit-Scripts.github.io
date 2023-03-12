const area = document.getElementById('bar');
const LowFuel = document.getElementById('LowFuel');
const Matrix = document.getElementById('Matrix');
const Marv = document.getElementById('Marv');
const LowFuelText = Array.from(document.querySelectorAll('h2'))[2].innerHTML.toLowerCase();
const MatrixText = Array.from(document.querySelectorAll('h2'))[1].innerHTML.toLowerCase();
const MarvText = Array.from(document.querySelectorAll('h2'))[0].innerHTML.toLowerCase();

if (area.addEventListener) {
    area.addEventListener('input', () => {
      selector();
    }, false);
} else if (area.attachEvent) {
    area.attachEvent('onpropertychange', () => {
      selector();
    });   
}

function selector() {
    let text =  area.value.toLowerCase();
    if (text != '') {
        if (!LowFuelText.includes(text)) {
            LowFuel.hidden = true;
        } else {
            LowFuel.hidden = false;
        }
        if (!MatrixText.includes(text)) {
            Matrix.hidden = true;
        } else {
            Matrix.hidden = false;
        }
        if (!MarvText.includes(text)) {
            Marv.hidden = true;
        } else {
            Marv.hidden = false;
        }
    } else {
        LowFuel.hidden = false;
        Matrix.hidden = false;
        Marv.hidden = false;
    }
}