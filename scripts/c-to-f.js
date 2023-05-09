"use strict"
window.onload=init;
function init(){
const convertBtnEl = document.getElementById('convertBtn');
convertBtnEl.onclick = onConvertBtnClicked;

const resetBtnEl = document.getElementById('resetBtn')
resetBtnEl.onclick = onResetBtnClicked;


}
function onConvertBtnClicked(){
    const fahrenheitEl = document.getElementById('Fahrenheit');
    const celsiusEl = document.getElementById('Celsius');
    let fahrenheit =  (+celsiusEl.value * 9/5) + 32;
    fahrenheitEl.value = fahrenheit;
}  
   function onResetBtnClicked() {
    document.getElementById('myform').reset();
   }