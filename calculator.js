// number buttons
const one   = document.getElementById("one");
const two   = document.getElementById("two");
const three = document.getElementById("three");
const four  = document.getElementById("four");
const five  = document.getElementById("five");
const six   = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine  = document.getElementById("nine");
const zero  = document.getElementById("zero");
const point = document.getElementById("point");
// clear input
const clear = document.getElementById("clear");

// input operaciones y resultado
const op = document.getElementById("op");
const res = document.getElementById("res");

// enviar números a input de operaciones
const setOpStr = ( val="" ) => {
    // ultimo valor de la pantalla de op
    const lastVal = op.value[ op.value.length - 1];
    
    // si se repite punto no continuar
    if( val === "." ) {
        const numArr = op.value.split(".");
        if( numArr.length > 1 ) return;
    }
    
    op.value += val;
}
// limpiar input de operaciones y resultadi
const clearOpResInput = () => {
    op.value = "";
    res.value = "";
}

// eventos números
one.onclick   = function() { setOpStr('1') };
two.onclick   = function() { setOpStr('2') };
three.onclick = function() { setOpStr('3') };
four.onclick  = function() { setOpStr('4') };
five.onclick  = function() { setOpStr('5') };
six.onclick   = function() { setOpStr('6') };
seven.onclick = function() { setOpStr('7') };
eight.onclick = function() { setOpStr('8') };
nine.onclick  = function() { setOpStr('9') };
zero.onclick  = function() { setOpStr('0') };
point.onclick = function() { setOpStr('.') };

clear.onclick = function() {
    clearOpResInput();
}
