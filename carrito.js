/*Crea un desarrollo en JavaScript que simule un carrito de compras 
utilizando un array. Debes implementar las siguientes funcionalidades:
a. Agregar productos al carrito:
Crea tres objetos que representen productos con propiedades como 
nombre y precio y stock.
b. Agregar un cuarto producto al principio del carrito:
Crea un nuevo objeto que represente un producto.
c. Eliminar el primer producto del carrito.
d. Eliminar el último producto del carrito */
const carrito = [];
//a-Agregar productos al carrito
//creo 3 objetos
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 500,
    stock: 15
}
const producto2 = {
    nombre: 'Tablet',
    precio: 200,
    stock: 50
}
const producto3 = {
    nombre: 'Gabinete Gamer',
    precio: 100,
    stock: 90
}

//función para agregar objetos al final del carrito.
/**formas de identificar objetos typeof supObjeto=='object'-parametro instanceof Object-Object.prototype.toString.call(parametro) === "[object Object]" */
/**forma de identificar si in parámetro es un array->Array.isArray(parametro) */
const agregarProductosAlFinalDelCarrito = (arreglo, producto) => {
    if (!Array.isArray(arreglo) || typeof producto !== 'object') {
        return console.log('Error:alguno de los datos ingresados no valido!');
    }
    arreglo.push(producto);
}
//prueba de escritorio
//const array2 = [1, 2, 3, 4];
console.log('***Agrego producto al principio***');
agregarProductosAlFinalDelCarrito(carrito, producto);
agregarProductosAlFinalDelCarrito(carrito, producto2);
agregarProductosAlFinalDelCarrito(carrito, producto3);
agregarProductosAlFinalDelCarrito(carrito, 'no soy un objeto');
agregarProductosAlFinalDelCarrito(carrito, 2345);
agregarProductosAlFinalDelCarrito(producto, producto2);
//agregarProductosAlFinalDelCarrito(carrito, array2);
console.log(carrito);
/*b. Agregar un cuarto producto al principio del carrito:
Crea un nuevo objeto que represente un producto.*/
const producto4 = {
    nombre: 'Celular',
    precio: 3000,
    stock: 100
}
//creo función para agregar al principio del carrito productos
const agregarProductosAlPrincipioDelCarrito = (arreglo, producto) => {
    if (!Array.isArray(arreglo) || typeof producto !== 'object') {
        return console.log('Error:alguno de los datos ingresados no valido!');
    }
    arreglo.unshift(producto);
}
//llamo a la función
console.log('***Agrego producto al principio***');
agregarProductosAlPrincipioDelCarrito(carrito, producto4);
console.log(carrito);

//c. Eliminar el primer producto del carrito.
//d. Eliminar el último producto del carrito.
//creo función para eliminar producto del carrito,el primero o ultimo según parámetro
const eliminarProductoDelCarrito = (arreglo, posicion = 'ultimo') => {
    if (!Array.isArray(arreglo) || typeof producto !== 'object') {
        return console.log('Error:alguno de los datos ingresados no valido!');
    }
    switch (posicion) {
        case 'ultimo':
            arreglo.pop();
            break;
        case 'primero':
            arreglo.shift();
            break;
        default:
            console.log('No es una posición valida!');
            break;
    }
}
//prueba de escritorio
console.log('***Elimino primer producto del carrito***');
console.log('Primer Producto del carrito: ', carrito[0]);
eliminarProductoDelCarrito(carrito, 'primero');
console.log(carrito);
console.log('***Elimino ultimo producto del carrito***');
console.log('Ultimo Producto del carrito: ', carrito[carrito.length - 1]);
eliminarProductoDelCarrito(carrito);
console.log(carrito);
//intento eliminar algo fuera de los parámetros establecidos 
console.log('***Intento eliminar algo fuera de los parámetros establecidos ***');
eliminarProductoDelCarrito(carrito, 'segundo');