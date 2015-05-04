angular.module('app', []);

angular.module('app').controller('ctrlTest', function($scope) {
    $scope.todos = [{
        name: 'ToDo 1',
        description: 'Description 1'
    }, {
        name: 'ToDo 2',
        description: 'Description 2'
    }, {
        name: 'ToDo 3',
        description: 'Description 3'
    }, {
        name: 'ToDo 4',
        description: 'Description 4'
    }];
});
