/**
 * agregar un elemento al arreglo
 */
const ensalada = ['tomate','lechuga','limon','cebolla'];
ensalada.push('aguacate')//se agrega al final
ensalada.unshift('repollo')//se agreaga al principio 

console.log(ensalada)

/**
 *eliminar un elemento del arreglo
 */
let salad = ['tomate','lechuga','limon','cebolla'];
salad.pop()
salad.shift()

console.log(salad)

/**
 * copiar y clonar un arreglo
 */


let ensalada2 = ['tomate','lechuga','limon','cebolla'];
let esnaladaCopy = ensalada2.slice();

console.log(esnaladaCopy);

/**
 * map(): permite recorrer el array y modificar los elementos presentes en él, 
 * retornando un nuevo array con la misma longitud que el original
 */

const numeros= [1,2,3,4,5];
const numerosDuplicados = numeros.map((numero)=> numero*2);
const nuemrosTriplicados = numeros.map((numero)=>numero*3);

console.log(numerosDuplicados)
console.log(nuemrosTriplicados)

/**
 * filter(): permite flitrar el array
 */

let students = [
    {name: 'Alvaro',
    score: 10,},
    {name: 'Daniel',
    score: 16,},
    {name: 'Alexis',
    score: 12,},
    {name: 'Carlos',
    score: 17,},
    {name: 'Alejandro',
    score: 8,},
    {name: 'Stefan',
    score: 9,},
]

let approved = students.filter(student=>student.score>=11);
let reprove = students.filter(studen=>studen.score<=10);
console.log(approved)
console.log(reprove)



/**
 * crea una función invertirCaso que tome como argumento 
 * un string y devuelva un string donde cada letra tiene el caso invertido,
 * es decir, cada letra está mayuscula si estaba en minuscula, y viceversa.
 * 
 * invertirCaso('feliz cumple') //'FELIZ CUMPLE'
 * invertirCaso('Ada lovelace') //'aDA LOVELACE'
 * invertirCaso('jAvAsCrIpT') //'JaVaScRiPt'
 */
function invertirCaso(string){
let arrayLetras = string.split('')
for(let i=0;i<arrayLetras.length;i++){
    if(arrayLetras[i] === arrayLetras[i].toUpperCase()){
        arrayLetras[i] = arrayLetras[i].toLowerCase()
    }
    else{
        arrayLetras[i]=arrayLetras[i].toUpperCase()
    }
 }
 return arrayLetras.join('')
    
    
}
console.log(invertirCaso('Feliz Cumple'))
/**
 * crea una funcion gano que tome como argumento un array tragamonedas
 * con 5 simbolos y devuelva true si son iguales y false si no.
 * Si el array tiene mas de 5 simbolos, solo debe comparar los 5 primeros.
 * 
 * gano(['⭐','⭐','💫','💫','💫']) //false
 * gano(['⭐','⭐',,'⭐','⭐','⭐'']) //true
 * gano(['⭐','⭐','⭐','⭐','⭐','💫']) //true
 */

/**
 * crea una funcion estanJuntos que tome como argumento un array de strings
 * personajes, y devuela true si Sam se encuentra al lado de frodo, ya sea antes o despues, o false sino.
*/