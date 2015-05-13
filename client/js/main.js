angular.module('app', ['ngResource']);

angular.module('app').controller('ctrlTest', function($scope, $resource) {
    $scope.todos = $resource('api/todos').query();
});
