// letras y numeros input
const letras  = document.getElementById("letras");
const numeros = document.getElementById("numeros");

// botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");

// valores temporales
let siguiente = "a-1";
let anterior = "a-1";

// enviar letras a input
const setWords = (val, next) => {
    const valSpl = val.split("-");
    const letrasLlenas = letras.value === "abcdefghij";
    
    if( letrasLlenas ) {
        setNumbers(val, next);
        return;
    }

    if( val === siguiente ) {
        letras.value += valSpl[0];

        siguiente = next;
        anterior = val;
    }
    else if( val === anterior ) return alert("No ingrese la misma letra");
    else if( val !== siguiente ) return alert("letra incorrecta");
}
// enviar numeros a input
const setNumbers = (val, next) => {
    const valSpl = val.split("-");
    const numerosLlenos = numeros.value === "1234567890";

    if( numerosLlenos ) return alert("Ejercicio terminado");

    if( val === siguiente ) {
        numeros.value += valSpl[1];

        siguiente = next;
        anterior = val;
    }
    else if( val === anterior ) return alert("No ingrese el mismo numero");
    else if( val !== siguiente ) return alert("numero incorrecto");
}
// eventos de los botones;
a1.onclick = function() { setWords('a-1', "b-2"); }
b2.onclick = function() { setWords('b-2', "c-3"); }
c3.onclick = function() { setWords('c-3', "d-4"); }
d4.onclick = function() { setWords('d-4', "e-5"); }
e5.onclick = function() { setWords('e-5', "f-6"); }
f6.onclick = function() { setWords('f-6', "g-7"); }
g7.onclick = function() { setWords('g-7', "h-8"); }
h8.onclick = function() { setWords('h-8', "i-9"); }
i9.onclick = function() { setWords('i-9', "j-0"); }
j0.onclick = function() { setWords('j-0', "a-1"); }
