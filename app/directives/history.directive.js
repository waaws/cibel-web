module.exports = function() {
  return {
    replace: true,
    templateUrl: './app/views/history.html',
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
