/**
 * Funcion que obtenga número menor 
 * y como parametro sea número
 */


function obtenerNumero (numero){
    let menor=Infinity 
    for (let i=0; i<numero.length;i++){
        if (numero[i]<=menor){
            menor=numero[i]
        }
    }
    return(menor)
}

console.log(obtenerNumero([5,7,99,34,54,3,12])) //2



/**
 * Sumar dos vectores 
 */
function sumarVectores(suma){
    let resultado=""
    for (let i=0;i<suma.length;i++){
        resultado = parseInt(resultado+suma[i])
    }
    return(resultado)
}

console.log(sumarVectores([5,7,10,12,24]))


/**
 * contiene un numero
 * moster si el indice pertenece a un arreglo 
 */

function contieneNumero(numero, numeros){
    for (let i=0;numeros.length;i++){
        if (numeros[i]===numero){
            return true
        }
    }
    return false
}
console.log(contieneNumero(54,[5,7,99,3,4,54,2,12]))
console.log(contieneNumero(103,[5,7,99,3,4,54,2,12]))