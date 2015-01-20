angular.module('app', []);

angular.module('app').controller('ctrlTest', function($scope) {
    $scope.todos = [{
        name: 'ToDo 1',
        description: 'Description 1'
    }, {
        name: 'ToDo 2',
        description: 'Description 2'
    }];
});
