alert("Bienvenido a la sumadora de numeros impares");
let index = 0;
var array = []
let numero = prompt ("Ingrese un numero impar o 0 para cancelar")
while (numero > 0){
  numero = parseInt(numero)
  if ((numero % 2) === 0){
    numero = prompt("Ingresaste un numero par, intente denuevo")
  }
  else {
    array[index] = parseInt(numero);
    index = index + 1;
    numero = prompt("Ingrese un numero impar o 0 para cancelar");
  }
}

function sumarTotal (array){
  let total = 0;
  for (let i=0; i< array.length; i++){
    total = total + array[i];
  }
  return total;
}

let total = sumarTotal(array);
console.log(total)
alert ("La suma total de sus numeros es = "+ total);
