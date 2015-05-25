app = angular.module('app', ['ngResource']);

angular.module('app').controller('mainController', function($scope, $resource, todos) {
    $scope.todos = $resource('api/todos').query();
    
    $scope.submit = function() {
        var todo = { title: $scope.title, description: $scope.description };
        todos.save(todo, function(newTodo) {
            $scope.todos.push(newTodo);
            $scope.title = '';
            $scope.description = '';
        });
    },
    
    $scope.removeTodo = function(todo) {
        todos.remove({ _id: todo._id }, function(data) {
            console.log('Data: ' + data);
            $scope.todos = $resource('api/todos').query();
        });
    }
});
