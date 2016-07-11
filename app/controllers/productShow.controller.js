module.exports = ['$scope', '$compile', 'productService', 'categoryTitleFilter', function($scope, $compile, productService, categoryTitleFilter) {

  $scope.productLoaded = false;

  $scope.product = productService.getProduct($scope.productId)
  .then(function(entries) {
    $scope.product = entries.items[0].fields;
    $scope.productLoaded = true;
    $scope.$digest();
  });

  $scope.formatList = function(list) {
    if (list) {
      return list.join(', ');
    }
  }

  $scope.showLiterCalculatorSection = function() {
    appendToMainSection("<div liter-calculator-section></div>");
  }

  function appendToMainSection(htmlString) {
    var compiledeHTML = $compile(htmlString)($scope);
    $("#main").hide();
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);    
  }

}];
