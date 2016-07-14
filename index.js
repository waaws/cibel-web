require('./styles/less/index.less');

var angular = require('angular');
var uibs = require('angular-ui-bootstrap');
var ngStorage = require('ngstorage');

var productService = require('./app/services/product.service.js');

var categoryTitleFilter = require ('./app/filters/categoryTitle.filter.js');

var globalController = require('./app/controllers/global.controller.js');
var homeController = require('./app/controllers/home.controller.js');
var literCalculatorController = require('./app/controllers/literCalculator.controller.js');
var modalController = require('./app/controllers/modal.controller.js');
var navbarController = require('./app/controllers/navbar.controller.js');
var productIndexController = require('./app/controllers/productIndex.controller.js');
var productShowController = require('./app/controllers/productShow.controller.js');

var historySectionDirective = require('./app/directives/history.directive.js');
var literCalculatorSectionDirective = require('./app/directives/literCalculator.directive.js');
var modalDirective = require('./app/directives/modal.directive.js');
var modalContentDirective = require('./app/directives/modalContent.directive.js');
var productIndexSectionDirective = require('./app/directives/productIndex.directive.js');
var productShowSectionDirective = require('./app/directives/productShow.directive.js');
var socialSectionDirective = require('./app/directives/social.directive.js');

var cibelApp = angular.module('cibelApp', [uibs, 'ngStorage']);

cibelApp.service('productService', productService);

cibelApp.filter('categoryTitle', categoryTitleFilter);

cibelApp.controller('globalController', globalController);
cibelApp.controller('homeController', homeController);
cibelApp.controller('literCalculatorController', literCalculatorController);
cibelApp.controller('modalController', modalController);
cibelApp.controller('navbarController', navbarController);
cibelApp.controller('productIndexController', productIndexController);
cibelApp.controller('productShowController', productShowController);

cibelApp.directive('historySection', historySectionDirective);
cibelApp.directive('literCalculatorSection', literCalculatorSectionDirective);
cibelApp.directive('modal', modalDirective);
cibelApp.directive('modalContent', modalContentDirective);
cibelApp.directive('productIndexSection', productIndexSectionDirective);
cibelApp.directive('productShowSection', productShowSectionDirective);
cibelApp.directive('socialSection', socialSectionDirective);

window.cibelApp = cibelApp;
