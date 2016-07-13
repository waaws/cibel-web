module.exports = ['$scope', '$compile', function($scope, $compile) {
  $scope.showLiterCalculatorSection = function() {
    $scope.appendToMainSection("<div liter-calculator-section></div>");
  }

  $scope.showHistorySection = function() {
    $scope.appendToMainSection("<div history-section></div>");
  }

  $scope.showSocialSection = function() {
    $scope.appendToMainSection("<div social-section></div>");
  }

  $scope.openModal = function(header, templateType, templateId, maxTemplateId) {
    var htmlString = "<modal header=" + header + " template-type=" + templateType + " template-id=" + templateId + " max-template-id=" + maxTemplateId + "></modal>";
    var compiledeHTML = $compile(htmlString)($scope);
    $(".modal-window-container").append(compiledeHTML);
  }

  $scope.openAdviceModal = function(adviceId) {
    $scope.openModal('consejos', 'advice', adviceId, 7);
  }

  $scope.openInspirationModal = function(inspirationId) {
    $scope.openModal('inspiración', 'inspiration', inspirationId, 2);
  }
}];
