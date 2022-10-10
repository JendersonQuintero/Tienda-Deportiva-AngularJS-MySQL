var toDoApp = angular
  .module("tienda-deportiva", ["filtrosCustom", "carrito", "ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider.when("/completado", {
      templateUrl: "/vistas/completado.html",
    });
    $routeProvider.when("/realizar-compra", {
      templateUrl: "/vistas/realizarCompra.html",
    });

    $routeProvider.when("/comprar", {
      templateUrl: "/vistas/resumenCompra.html",
    });

    $routeProvider.when("/productos", {
      templateUrl: "/vistas/listaProductos.html",
    });

    $routeProvider.otherwise({
      templateUrl: "/vistas/listaProductos.html",
    });
  });

toDoApp.controller("controlador", function ($scope, $http) {
  $scope.data = {};
  $http
    .get("http://localhost:3000/get-productos")
    .success(function (res) {
      $scope.data.products = res;
    })
    .error(function (error) {
      $scope.data.error = error;
    });
});
