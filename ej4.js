const tecladoEls = document.getElementById("teclado").getElementsByTagName("*");
const input = document.getElementById("input");

const setInput = (val) => {
    let newVal = val;
    // numbers
    if( val == "one" ) newVal = "1";
    if( val == "two" ) newVal = "2";
    if( val == "three" ) newVal = "3";
    if( val == "four" ) newVal = "4";
    if( val == "five" ) newVal = "5";
    if( val == "six" ) newVal = "6";
    if( val == "seven" ) newVal = "7";
    if( val == "eight" ) newVal = "8";
    if( val == "nine" ) newVal = "9";
    if( val == "zero" ) newVal = "0";
    // chars
    if( val == "question" ) newVal = "?";
    if( val == "admiration" ) newVal = "¡";
    if( val == "coma" ) newVal = ",";
    if( val == "dot" ) newVal = ".";
    if( val == "script" ) newVal = "-";
    // borrador
    if( val == "eraser" ) return eraser();
    // tecla enter
    if( val == "enter" ) newVal = "\n";
    // letra eñe
    if( val == "ene" ) newVal = "ñ";
    if( val == "space" ) newVal = "&nbsp;";

    input.innerHTML += newVal;
}

const eraser = () => {
    const text = input.innerHTML;
    const textLength = text.length;
    const newText = text.slice( 0, textLength -1 );
    input.innerHTML = newText;
}

for( let i=0; i<tecladoEls.length; i++ ) {
    const elem = tecladoEls[i];
    elem.addEventListener("click", function(el) {
        if( el.target["id"] ) setInput( el.target["id"] );
    });
}
