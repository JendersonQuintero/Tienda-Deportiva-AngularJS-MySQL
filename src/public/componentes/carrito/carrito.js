angular.module("carrito", []).factory("carrito", function() {
    let datosCarrito = [];

    return {
        agregarProducto: function(id, nombre, precio) {
            let itemExistente = false;

            for (let i = 0; i < datosCarrito.length; i++) {
                if (datosCarrito[i].id == id) {
                    datosCarrito[i].count++;
                    itemExistente = true;
                    break;
                }
            }
            if (!itemExistente) {
                datosCarrito.push({
                    count: 1,
                    id: id,
                    precio: precio,
                    nombre: nombre
                });
            }
        },
        removerProducto: function (id) {
            for (let i = 0; i < datosCarrito.length; i++) {
                if (datosCarrito[i].id == id) {
                    datosCarrito.splice(i, 1);
                    break;
                }
                
            }
        },
        obtenerProductos: function () {
            return datosCarrito;
        }
    };
}).directive("resumenCarrito", function (carrito) {
    return {
        restrict: "E",
        templateUrl: "componentes/carrito/resumenCarrito.html",
        controller: function ($scope) {

            let datosCarrito = carrito.obtenerProductos();

            $scope.total = function () {
                let total = 0;
                for (let i = 0; i < datosCarrito.length; i++) {
                    total += (datosCarrito[i].precio * datosCarrito[i].count);
                }
                return total;
            }
            
            $scope.itemContador = function () {
                var total = 0;
                for (let i = 0; i < datosCarrito.length; i++) {
                    total += datosCarrito[i].count;
                }
                return total;
            }
        }
    }
});