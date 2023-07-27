class ProductManager{
    constructor (){
        this.productos = []
        this.carrito = []
    }

    agregarProducto(nombre, precio, id) {
        this.productos.push({nombre:nombre, precio:precio, id:id});
    }

    obtenerProductos() {
        return this.productos
    }

    buscarProducto(id){
        return this.productos.find(item => item.id == id);
    }

    eliminarProducto(id){
        this.productos = this.productos.filter(item => item.id != id);
    }

    agregarProductoCarrito(id){
        if (this.carrito.some (item => item.id == id)){
            let prod = this.carrito.findIndex (item => item.id == id)
            this.carrito[prod].cantidad += 1
            this.carrito = this.carrito
            
            
        }
        else{
              let producto = this.buscarProducto(id)
              producto.cantidad = 1
              this.carrito.push (producto)
        }
        
    }

}


let pm = new ProductManager();
pm.agregarProducto("Coca Cola", 500, 1);
pm.agregarProducto("Pepsi", 400, 2);
pm.agregarProducto("Manaos", 300, 3);
//pm.eliminarProducto(2);
pm.agregarProductoCarrito(3);
pm.agregarProductoCarrito(3);
pm.agregarProductoCarrito(3);
pm.agregarProductoCarrito(2);
pm.agregarProductoCarrito(1);


console.log(pm.carrito);
