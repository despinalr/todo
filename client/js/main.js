angular.module('app', ['ngResource']);

angular.module('app').controller('mainController', function($scope, $resource) {
    $scope.todos = $resource('api/todos').query();
});
