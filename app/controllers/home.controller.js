module.exports = ['$scope', '$compile', function($scope, $compile) {
  function appendToMainSection(htmlString) {
    var compiledeHTML = $compile(htmlString)($scope);
    $("#main").hide();
    $(".main-section-wrapper").empty();
    $(".main-section-wrapper").append(compiledeHTML);    
  }

  $scope.showLiterCalculatorSection = function() {
    appendToMainSection("<div liter-calculator-section></div>");
  }

  $scope.showHistorySection = function() {
    appendToMainSection("<div history-section></div>");
  }

  $scope.showSocialSection = function() {
    appendToMainSection("<div social-section></div>");
  }

  $scope.showProductIndexSection = function(category) {
    appendToMainSection("<div product-index-section category=" + category + "></div>");
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
