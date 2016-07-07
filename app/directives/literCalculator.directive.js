module.exports = function() {
  return {
    replace: true,
    templateUrl: './app/views/liter-calculator.html',
    link: function(scope, element, attributes) {
      if ($(".main").is(":hidden")) {
        $("#home").hide();
        $("#products").hide();
        $("#main").slideDown();
        $("#main").scrollTop();
      }
    }
  }
};
