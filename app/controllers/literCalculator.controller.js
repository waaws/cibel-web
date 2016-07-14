module.exports = ['$scope', 'productService', function($scope, productService) {
  var _ = require('lodash');

  $scope.surface;
  $scope.product;
  $scope.parameterType;
  $scope.squareMeter;
  $scope.width;
  $scope.large;
  $scope.result = 45;

  $scope.productsLoaded = false;
  $scope.products = [];

  productService.getProducts()
  .then(function(entries) {
    $scope.products = entries;
    $scope.productsLoaded = true;
  });

  $scope.surfaces = [
    { id: 'pared', name: 'Paredes' },
    { id: 'metal', name: 'Metales' },
    { id: 'madera', name: 'Maderas' },
    { id: 'cielorraso', name: 'Cielorrasos' },
    { id: 'techo', name: 'Techos' }
  ];

  var paintTypesCalculatorFunctions = [
    { type: 'latex', literCalculatorFunction: function(squareMeters) { return squareMeters/6 } },
    { type: 'barniz', literCalculatorFunction: function(squareMeters) { return squareMeters/7 } },
    { type: 'sintetico', literCalculatorFunction: function(squareMeters) { return squareMeters/5 } },
    { type: 'membrana', literCalculatorFunction: function(squareMeters) { return squareMeters } }
  ];

  $scope.filterProduct = function(product) {
    return $scope.surface && product.fields.superficie == $scope.surface.id;
  }

  $scope.disableCalculateButton = function() {
    var surfaceSelected = !!$scope.surface;
    var productSelected = !!$scope.product;
    var parameterTypeSelected = !!$scope.parameterType;
    var parameterInputValues = $scope.parameterType == 'squareMeter' && $scope.squareMeter
      || $scope.parameterType == 'manual' && $scope.width && $scope.large;

    var enableButton = surfaceSelected && productSelected && parameterTypeSelected && parameterInputValues;

    return !enableButton;
  }

  $scope.calculate = function() {
    var type = _.find(paintTypesCalculatorFunctions, function(t) { return t.type == $scope.product.fields.tipo });
    var squareMeters = calculateSquareMeters();
    $scope.result = type.literCalculatorFunction(squareMeters);

    $('.liter-calculator-form').hide();
    $('.liter-calculator-result').show();
  }

  $scope.back = function() {
    $('.liter-calculator-form').show();
    $('.liter-calculator-result').hide();
  }

  function calculateSquareMeters() {
    if ($scope.parameterType  == 'squareMeter') {
      return parseInt($scope.squareMeter);
    } else {
      return parseInt($scope.width) * parseInt($scope.large);
    }
  }
}];
