module.exports = ['$scope', '$compile', 'productService', 'categoryTitleFilter', function($scope, $compile, productService, categoryTitleFilter) {
  function appendToMainSection(htmlString) {
    var compiledeHTML = $compile(htmlString)($scope);
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);    
  }

  $scope.productsLoaded = false;
  $scope.products = [];

  $scope.products = productService.getProducts($scope.category)
  .then(function(entries) {
    $scope.products = entries.items;
    $scope.productsLoaded = true;
    $scope.$digest();
  });

  $scope.showProductSection = function(product) {
    appendToMainSection("<div product-show-section category=" + $scope.category + " product-id=" + product.fields.id + "></div>");
  }

}];
