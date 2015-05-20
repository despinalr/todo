app = angular.module('app', ['ngResource']);

angular.module('app').controller('mainController', function($scope, $resource, todos) {
    $scope.todos = $resource('api/todos').query();
    
    $scope.submit = function() {
        var todo = { title: $scope.title, description: $scope.description };
        todos.save(todo);
        $scope.todos.push(todo);
    }
});
