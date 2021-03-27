// 2) Strings
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var text01 = 'work hard travel harder';
console.log (text01.toUpperCase() );
// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var text02 = 'good vibes only'
var text03 = text02.substring (0,5);
console.log (text03);
// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var text04 = 'varon wine bar'
var text05 = text04.substring (11,14);
console.log (text05);
// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var text06 = 'laugh like no one is listening'
var text07 = text06.substring (0,1);
var text08 = text07.toUpperCase ();
var text09 = text06.substring (1,30);
var text10 = text08 += text09;
console.log (text10)
// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var text11 = 'live like heaven is on earth'
console.log (text11.indexOf (' '))
// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var text12 = 'watching relative'
text12.indexOf (' ')
var text13 = text12.substring (0,1)
var text14 = text13.toUpperCase ()
var text15 = text12.substring (9,10)
var text16 = text15.toUpperCase ()
var text17 = text12.substring (1,9)
var text18 = text17.toLowerCase ()
var text19 = text12.substring (10,17)
var text20 = text19.toLowerCase ()
console.log (text14 + text18 + text16 + text20)