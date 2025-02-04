let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let 

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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length === numeroMaximo) {
        
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
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

// METODOS ADICIONALES del juego
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

function mostrarNumerosMaximoMinimo(){
    let listaNumero=[2,7,8,9,22,45];
    let maximo = Math.max.apply(null, listaNumero);
    let minimo = Math.min.apply(null, listaNumero);
    console.log("El número máximo es: " + maximo);
    console.log("El número mínimo es: " + minimo);

};

function obtenerMaximoYMinimo() {
    let listaNumeros = [2, 6, 9, 5, 1, 9];

    // Usamos Math.max() con el operador de expansión para obtener el valor máximo
    let maximo = Math.max(...listaNumeros);

    // Usamos Math.min() con el operador de expansión para obtener el valor mínimo
    let minimo = Math.min(...listaNumeros);

    console.log("Número máximo:", maximo);  // Imprime el número máximo
    console.log("Número mínimo:", minimo);  // Imprime el número mínimo
}

mostrarNumerosMaximoMinimo();
obtenerMaximoYMinimo();