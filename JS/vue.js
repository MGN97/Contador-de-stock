/*M.G.N*/

const turn = new Vue({
    el: '#plo-vue',
    data: {
        titulo: 'Contador de Stock',
        texto: 'Para agregar un producto a la lista haga click en -Añadir- o presione la tecla -Enter- :',
        nuevoProducto: '',

        productos: [],
        total: 0
    },
    methods: {
        /*agregarFruta() {
            this.productos.push({ nombre: this.nuevoProducto, cantidad: 0 })
        },*/

        agregarProductoConIf() {
            if (this.nuevoProducto != "") {
                this.productos.push({ nombre: this.nuevoProducto, cantidad: 0 });
                this.nuevoProducto = '';
            }
        }
    },
    computed: {
        sumarProductos() { //sumatoria total de la cantidad de productos
            this.total = 0;
            for (producto of this.productos) {
                this.total += producto.cantidad; //Acumulador
            }
            return this.total;
        }
    }
})