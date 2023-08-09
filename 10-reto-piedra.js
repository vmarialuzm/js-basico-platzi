let op1 = "piedra";
let op2 = "papel";
let op3 = "tijera";

let resultado = function (user,computadora) {
    if (user != computadora) {
        if (user === op1 && computadora === op3 ) {
            console.log("Ganó el user con " + op1);
        } else if (user === op3 && computadora === op2 ) {
            console.log("Ganó el user con " + op3);
        } else if (user === op2 && computadora === op1 ) {
            console.log("Ganó el user con " + op2);
        } else {
            console.log("Ganó la computadora !");
        }
    }
    else if (user === computadora){
        console.log("Empate!");
    }
}

resultado(op1,op3);

