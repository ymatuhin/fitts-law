var app = angular.module('app', ['ngRoute']);

app.config([
  '$routeProvider', function($routeProvider, $routeParams) {
    $routeProvider.when('/:id', {
        templateUrl: function(params) {
          if (params.id > 30) {
            params.id = 1;
            location.hash = '#/1'
          }

          return 'html/' + params.id + '.html';
        },
        controller: 'indexCtrl'
    }, { id: "[0-9]" })
    .otherwise({
      templateUrl: 'html/1.html',
      controller: 'indexCtrl'
    });
  }
]);

app.run(function($rootScope) {
  $rootScope.hasDevice = true;
});