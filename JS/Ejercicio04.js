//Objetos
console.warn("--- Tipo de dato: Object");
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
};

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

//Object Literal Enhacement
const autenticado = true;
const usuario = "juan";

// const nuevoObjecto = {
//     autenticado : autenticado,
//     usuario : usuario
// };

const nuevoObjecto = {
    autenticado,
    usuario
};
console.table(nuevoObjecto);