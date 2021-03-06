// 5) For
// a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
let amount = ['one', 'two', 'three', 'four', 'five'];
for (let value of amount) {
  alert(value);
}
// b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada. 
for (i = 0; i < amount.length; i++) {
  alert(amount[i].charAt(0).toUpperCase() + amount[i].slice(1));
}
// c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = '';
for (i = 0; i < amount.length; i++) {
  sentence += " " + amount[i];
}
alert(sentence);
/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log). */
let empty = [];
for (var i = 0; i < 10; i++) {
  empty.push(i);
}
console.log (empty)