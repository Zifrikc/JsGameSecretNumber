let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

// METODOS ADICIONALES
function numeroFactorial() {
    let numero = parseInt(document.getElementById('numero').value);
    let factorial = 1;
    while (numero > 0) {
        factorial *= numero;
        numero--;
    }
    return console.log('numero final '+factorial);

}
function calcularAreaYPerimetro(alto, ancho){
    let altura = parseFloat(document.getElementById('alto').value);
    let anchura = parseFloat(document.getElementById('ancho').value);
    let area = altura * anchura;
    let perimetro = (altura + anchura) * 2;

    return console.log('El área es de: '+area+' y el perímetro es de: '+perimetro);
}

function calcularAreaYPerimetroCirculo(radio){
    let radioTotal = parseFloat(document.getElementById('radio').value);
    let area = 3.14 * radioTotal * radioTotal;
    let perimetro = 2 * 3.14 * radioTotal;

    return console.log('El área es de: '+area+' y el perímetro es de: '+perimetro);
}

function numeroTablaMultiplicar(numeroTabla){
    let multiplo = parseInt(document.getElementById('numeroTabla').value);
    let i = 0;

    while (i <= 10){
        console.log(multiplo+' x '+i+' = '+multiplo*i);
        i++;
    }
}