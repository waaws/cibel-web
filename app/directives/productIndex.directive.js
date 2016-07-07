module.exports = function() {
  return {
    controller: 'productController',
    replace: true,
    scope: {
      category: '@'
    },
    templateUrl: './app/views/product-index.html',
    link: function(scope, element, attributes) {
      $("#home").hide();
      $("#products").hide();
      $("#advice").hide();
      $("#inspiration").hide();
      $("#company").hide();
      $("#main").scrollTop();
      $("#main").slideDown();
    }
  }
};
