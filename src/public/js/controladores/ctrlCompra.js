angular.module("tienda-deportiva")
.controller("ctrlResumenCarrito", function ($scope, carrito) {
    $scope.datosCarrito = carrito.obtenerProductos();

    $scope.total = function () {
        let total = 0;
        for (let i = 0; i < $scope.datosCarrito.length; i++) {
            total += ($scope.datosCarrito[i].precio * $scope.datosCarrito[i].count);
        }
        return total;
    }

    $scope.remover = function (id) {
        carrito.removerProducto(id);
    }
})