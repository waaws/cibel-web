cibelApp.controller('literCalculatorController', ['$scope', function($scope) {
  $scope.surface = '';
  $scope.product = '';
  $scope.parameterType = '';
  $scope.squareMeter = '';
  $scope.width = '';
  $scope.large = '';
  $scope.result = 45;

  $scope.availableSurfaceOptions = [
    {id: 'superficie_1', name: 'Superficie 1'},
    {id: 'superficie_2', name: 'Superficie 2'},
    {id: 'superficie_3', name: 'Superficie 3'},
    {id: 'superficie_4', name: 'Superficie 4'}
  ];

  $scope.availableProductOptions = [
    {id: 'product_1', name: 'Producto 1', surface_id: 'superficie_1'},
    {id: 'product_2', name: 'Producto 2', surface_id: 'superficie_1'},
    {id: 'product_3', name: 'Producto 3', surface_id: 'superficie_2'},
    {id: 'product_4', name: 'Producto 4', surface_id: 'superficie_2'},
    {id: 'product_5', name: 'Producto 5', surface_id: 'superficie_3'},
    {id: 'product_6', name: 'Producto 6', surface_id: 'superficie_4'}
  ];

  $scope.calculate = function() {
    $('.liter-calculator-form').hide();
    $('.liter-calculator-result').show();
  }

  $scope.back = function() {
    $('.liter-calculator-form').show();
    $('.liter-calculator-result').hide();
  }
}]);
