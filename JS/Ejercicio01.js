// Comentarios de una sola linea
/* Comentarios multi-lìnea */
// EJERCICIO 01: Declaraciòn de variables

// a) var
console.warn("--- Declaraciòn de variables usando: VAR");
var miNombre = "Diego Miguel";
var misApellidos;
var miEdad = 20;

console.log("Intentando leer las variables: ", miNombre, misApellidos); // El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funciòn o mètodo
misApellidos = "Rivera Chavez";
console.log("Variables inicializadas: ", miNombre, misApellidos);
// Una variables puede cambiar en el proceso de ejecuciòn del programa.

// b) const
console.warn("--- Declaraciòn de variables de tipo constante usando: CONST");
const miUniversidad = "UT Xicotepec";
const miMatricula = 230260;
console.log("Hola", miNombre, misApellidos,"se que estudias actualmente en:", miUniversidad, "asignaron la matricula:", miMatricula, "y tienes una edad de:", miEdad, "años");
// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funciòn typeOf() 
console.log("Analizando los datos puedo deducir que: ");
console.log("miNombre es una variable de tipo:",typeof(miNombre));
console.log("misApellidos es una variable de tipo:",typeof(misApellidos));
console.log("miUniversidad es una variable de tipo:",typeof(miUniversidad));
console.log("miEdad es una variable de tipo:",typeof(miEdad));

// c) let
console.warn("--- Declaraciòn de variables locales usando: LET");
let miFechaNacimiento = "2004-03-30";
let miColorfavorito;

console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el:", miFechaNacimiento, " y tu color favorito es: mmmm dejame pensar...");
miColorfavorito = "azul";
console.log(`Creo que es: ${miColorfavorito}, le atine?`); // backtic: `` para leer interpolaciones (alt + 96)

console.log("miFechaNacimiento es una variable de tipo:", typeof(miFechaNacimiento));
console.log("miColorfavorito es una variable de tipo:", typeof(miColorfavorito));