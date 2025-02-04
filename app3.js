/*
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarElementos(){
    console.log(lenguajesDeProgramacion);
};

function mostrarElementosInverso(){
    console.log(lenguajesDeProgramacion.reverse());
    console.log(lenguajesDeProgramacion.length());
};

function calcularNumeros(){
    let listaNumeros = [2, 6, 9, 5, 1, 9];
    let sumaTotal = listaNumeros.reduce(function(a, b) {
        return a + b;
    });
    let promedio = sumaTotal / listaNumeros.length;
    console.log(promedio); 
};

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

function sumaElementos(){
    let listaNumeros = [2, 6, 9, 5, 1, 9];
    let sumaTotal = listaNumeros.reduce(function(a, b) {
        return a + b;
    });
    console.log(sumaTotal);// Imprime la suma total de los elementos de la lista
};

function buscarElemento(elemento){
    let listaNumeros = [2, 6, 9, 5, 1, 9];
    let indice = listaNumeros.indexOf(elemento);
    if (indice > -1) {
        console.log("El elemento", elemento, "se encuentra en la posición", indice);
    } else {
        console.log("El elemento", elemento, "no se encuentra en la lista");
    }
};

function sumarListas(lista1, lista2){
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    console.log(listaSuma);
}
function sumaDeListas(){
    let lista1 = [1, 2, 3, 4, 5];
    let lista2 = [6, 7, 8, 9, 10];
    let i = 0;
    let listaSuma = [];
    while (i < lista1.length) {
        listaSuma.push(lista1[i] + lista2[i]);
        i++;
    }
};

function listaCuadrado(){
    let listaNumeros = [1,2,3,4,5,7,21];
    let resultadoLista=[];
    while(listaNumeros.length){
        let numero = listaNumeros.shift();
        resultadoLista.push(numero*numero);
    }
    console.log(resultadoLista);
     resultadoLista = listaNumeros.reduce(function(a, b) {
        return a * b;
    });
    console.log(resultadoLista);
};

listaCuadrado();