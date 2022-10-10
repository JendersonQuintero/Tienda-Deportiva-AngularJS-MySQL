angular
  .module("tienda-deportiva")
  .constant("listaProductoClaseActiva", "btn-primary")
  .constant("listaProductoPaginaContador", 3)
  .controller(
    "ctrlListaProductos",
    function (
      $scope,
      $filter,
      listaProductoClaseActiva,
      listaProductoPaginaContador,
      carrito
    ) {
      var selectedCategory = null;
      $scope.selectedPage = 1;
      $scope.pageSize = listaProductoPaginaContador;

      $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
      };

      $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
      };       

      $scope.categoryFilterFn = function (product) {
        return selectedCategory == null || product.categoria == selectedCategory;
      };

      $scope.getCategoryClass = function (categoria) {
        return selectedCategory == categoria ? listaProductoClaseActiva : "";
      };

      $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? listaProductoClaseActiva : "";
      };

      $scope.agregarProductoCarrito = function (producto) {
        carrito.agregarProducto(producto.id, producto.nombre, producto.precio);
      }
       
    }
  );
