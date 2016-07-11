module.exports = function() {
  return {
    controller: 'productShowController',
    replace: true,
    scope: {
      category: '@',
      productId: '@'
    },
    templateUrl: './app/views/product-show.html',
    link: function(scope, element, attributes) {
      $("#home").hide();
      $("#products").hide();
      $("#advice").hide();
      $("#inspiration").hide();
      $("#company").hide();
    }
  }
};
