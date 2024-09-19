//Objetos
console.warn("--- Tipo de dato: Object");
const producto1 = {
    Nombre:"Tablet\"9",
    Marca:"Mac",
    Modelo:"iPad",
    CostoCompra: 11500.25,
    CostoVenta: 15400,
    Disponible: true,
    SKU: Symbol("RICD040330HPLVHGA8"),
    Colores: ["Blanco", "Negro", "Rosa", "Azul","Amarillo"]
}
//Imprimir el objeto
console.log(producto1);
//Los objetos se pueden imprimir en forma de tabla utilizando la funcion console.table
console.table(producto1);

//Acceder a las propiedades de un objeto
console.warn("Leyendo las propiedades de un Objeto y sus tipos de datos")
console.log(`Nombre del producto: ${producto1.Nombre}, que es del tipo: ${typeof(producto1.Nombre)}\n`+
`Marca del producto: ${producto1.Marca}, que es del tipo: ${typeof(producto1.Marca)}`+
`Marca del producto: ${producto1.Modelo}, que es del tipo: ${typeof(producto1.Modelo)}`+
`Marca del producto: ${producto1.CostoCompra}, que es del tipo: ${typeof(producto1.CostoCompra)}`+
`Marca del producto: ${producto1.CostoVenta}, que es del tipo: ${typeof(producto1.CostoVenta)}`+
`Marca del producto: ${producto1.Disponible}, que es del tipo: ${typeof(producto1.Disponible)}`+
`Marca del producto: ${String(producto1.SKU)}, que es del tipo: ${typeof(String(producto1.SKU))}`+
`Marca del producto: ${producto1.Colores}, que es del tipo: ${typeof(producto1.Colores)}`);









console.warn("--- Separacion ---");
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