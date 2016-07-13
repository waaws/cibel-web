module.exports = ['$scope', '$compile', function($scope, $compile) {
  $scope.appendToMainSection = function(htmlString) {
    var compiledeHTML = $compile(htmlString)($scope);
    $("#main").hide();
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);    
  }

  $scope.closeModal = function() {
    $(".modal-wrapper").hide();
    $(".modal-window-container").empty();
  }

  $scope.showProductIndexSection = function(categoryId) {
    $scope.appendToMainSection("<div product-index-section category=" + categoryId + "></div>");
  }

  $scope.categories = [
    { 'id': 'interior', 'name': 'Interiores' },
    { 'id': 'exterior', 'name': 'Exteriores' },
    { 'id': 'maderas', 'name': 'Maderas y Metales' },
    { 'id': 'fondos', 'name': 'Fondos y Acondicionadores' },
    { 'id': 'industrial', 'name': 'Productos Especiales' }
  ];
}];
