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
// op buttons
const percent   = document.getElementById('per');
const divide    = document.getElementById('div');
const multiply  = document.getElementById('mul');
const substract = document.getElementById('sub');
const add       = document.getElementById('add');
// equal button
const equal = document.getElementById('equal');
// pi button
const pi = document.getElementById('pi');

const ops = ['%', '/', '*', '-', '+'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// input operaciones y resultado
const op = document.getElementById("op");
const res = document.getElementById("res");

// enviar números a input de operaciones
const setOpStr = ( val="" ) => {
    // ultimo valor de la pantalla de op
    const lastVal = op.value[ op.value.length - 1];
    const isOpVal = ops.find( op => op === val );
    const isLastOpVal = ops.find( op => op === lastVal );

    if( val === '.' && !lastVal) return;

    if( isOpVal ) {
        if( isLastOpVal || op.val === '.' ) op.value = op.value.slice(0, -1);
    }
    
    if( lastVal === '.' && val === '.' ) return;
    if( isLastOpVal && val === '.') op.value = op.value.slice(0, -1);
    if( lastVal === '.' && isOpVal ) op.value = op.value.slice(0, -1);

    if( val === "pi") {
        if( lastVal === "0" || lastVal === "1" || lastVal === "2" || lastVal === "3" || lastVal === "4" || lastVal === "5" || lastVal === "6" || lastVal === "7" || lastVal === "8" || lastVal === "9" ) {
            op.value = op.value.slice(0, -1);
        }

        val = Math.PI;
    }
    
    op.value += val;
}

// limpiar operación
const doOperation = () => {
    const result = eval( op.value );
    res.value = result;
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
// numero pi
pi.onclick = function() { setOpStr('pi') };
// eventos operaciones
add.onclick       = function() { setOpStr('+') };
substract.onclick = function() { setOpStr('-') };
multiply.onclick  = function() { setOpStr('*') };
divide.onclick    = function() { setOpStr('/') };
percent.onclick   = function() { setOpStr('%') };
// equal button
equal.onclick = function() {
    doOperation();
}
// evento limpiar pantalla
clear.onclick = function() {
    clearOpResInput();
}

while(true) {
    let res = 0;
    let val1 = prompt("Ingrese valor 1");
    let val2 = prompt("Ingrese valor 2");
    const op = prompt(`
        1. sumar
        2. restar
        3. multiplicar
        4. dividir
        5. salir
    `);

    if( op === "5" ) break;

    val1 = parseFloat(val1);
    val2 = parseFloat(val2);

    if( op === "4" ) {
        if( val2 === 0 ) res = Number.POSITIVE_INFINITY;
        else res = val1 / val2;

    }
    else if( op === "3" ) res = val1 * val2;
    else if( op === "2" ) res = val1 - val2;
    else if( op === "1" ) res = val1 + val2;

    alert(`Resultado = ${res}`);
}

