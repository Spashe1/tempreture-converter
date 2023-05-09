"use strict"
window.onload=init;
function init(){
const convertBtnEl = document.getElementById('convertBtn');
convertBtnEl.onclick = onConvertBtnClicked;

const resetBtnEl = document.getElementById('resetBtn');
resetBtnEl.onclick = onResetBtnClicked;

}
function onConvertBtnClicked(){
     const fahrenheitEl = document.getElementById('Fahrenheit');
    const celsiusEl = document.getElementById('Celsius');
    let celsius= (+fahrenheitEl.value - 32) * 5/9;
    celsiusEl.value = celsius;
    
}
function onResetBtnClicked(){
    document.getElementById('myform').reset();
}
