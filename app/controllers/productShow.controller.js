module.exports = ['$rootScope', '$scope', '$compile', 'productService', 'categoryTitleFilter',
  function($rootScope, $scope, $compile, productService, categoryTitleFilter) {
    $scope.productLoaded = false;

    productService.getProduct($scope.productId)
    .then(function(product) {
      $scope.product = product.fields;
      $scope.productLoaded = true;
      if (!$rootScope.$$phase) {
        $scope.$digest();
      }
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
  }
];
