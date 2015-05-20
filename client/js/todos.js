app.factory('todos', ['$resource', function($resource) {
    return $resource('/api/todos');
}]);