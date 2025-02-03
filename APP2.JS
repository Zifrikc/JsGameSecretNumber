/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/



function calcularIMC(altura, peso) {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    let imc = peso / (altura * altura);
    return imc;
}

function numeroFactorial() {
    let numero = parseInt(document.getElementById('numero').value);
    let factorial = 1;
    while (numero > 0) {
        factorial *= numero;
        numero--;
    }
    return console.log('numero final'+factorial);

}

function convertirDolaresASoles(moneda){
    let moneda = parseFloat(document.getElementById('moneda').value);
    let soles = 3.75 * moneda;
    return console.log('El valor en la moneda local es de : '+soles);
}

function calcularAreaYPerimetro(altura, anchura){
    let altura = parseFloat(document.getElementById('altura').value);
    let anchura = parseFloat(document.getElementById('anchura').value);
    let area = altura * anchura;
    let perimetro = (altura + anchura) * 2;

    return console.log('El área es de: '+area+' y el perímetro es de: '+perimetro);
}
function calcularAreaYPerimetroCirculo(radio){
    let radio = parseFloat(document.getElementById('radio').value);
    let area = 3.14 * radio * radio;
    let perimetro = 2 * 3.14 * radio;

    return console.log('El área es de: '+area+' y el perímetro es de: '+perimetro);
}

function numeroTablaMultiplicar(numero){
    let multiplo = parseInt(document.getElementById('numero').value);
    let i = 0;

    while (i <= 10){
        console.log(multiplo+' x '+i+' = '+multiplo*i);
        i++;
    }
}