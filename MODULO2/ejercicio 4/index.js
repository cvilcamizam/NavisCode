//Crea una función que reciba un número y muestre por consola si es par o impar.
function ParImpar(numero){
   if (numero % 2 === 0) return 'El número es par';
   else return 'El número es impar';
}
console.log(ParImpar(12));