module.exports = ['$scope', '$compile', 'productService', 'categoryTitleFilter', function($scope, $compile, productService, categoryTitleFilter) {
  function appendToMainSection(htmlString) {
    var compiledeHTML = $compile(htmlString)($scope);
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);    
  }

  $scope.productsLoaded = false;
  $scope.products = [];

  productService.getProducts()
  .then(function(entries) {
    $scope.products = entries;
    $scope.productsLoaded = true;
  });

  $scope.filterProduct = function(product) {
    return product.fields.linea == $scope.category;
  }

  $scope.showProductSection = function(product) {
    appendToMainSection("<div product-show-section category=" + $scope.category + " product-id=" + product.fields.id + "></div>");
  };

}];
