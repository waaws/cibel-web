var homeController = require('./app/controllers/home.controller.js');
var literCalculatorController = require('./app/controllers/literCalculator.controller.js');
var modalController = require('./app/controllers/modal.controller.js');
var navbarController = require('./app/controllers/navbar.controller.js');
var productController = require('./app/controllers/product.controller.js');

var historySectionDirective = require('./app/directives/history.directive.js');
var literCalculatorSectionDirective = require('./app/directives/literCalculator.directive.js');
var modalDirective = require('./app/directives/modal.directive.js');
var modalContentDirective = require('./app/directives/modalContent.directive.js');
var productIndexSectionDirective = require('./app/directives/productIndex.directive.js');
var socialSectionDirective = require('./app/directives/social.directive.js');

var cibelApp = angular.module('cibelApp', []);

cibelApp.controller('homeController', homeController);
cibelApp.controller('literCalculatorController', literCalculatorController);
cibelApp.controller('modalController', modalController);
cibelApp.controller('navbarController', navbarController);
cibelApp.controller('productController', productController);

cibelApp.directive('historySection', historySectionDirective);
cibelApp.directive('literCalculatorSection', literCalculatorSectionDirective);
cibelApp.directive('modal', modalDirective);
cibelApp.directive('modalContent', modalContentDirective);
cibelApp.directive('productIndexSection', productIndexSectionDirective);
cibelApp.directive('socialSection', socialSectionDirective);

window.cibelApp = cibelApp;
