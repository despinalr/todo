var mongoose = require('mongoose');
var promise = require('bluebird');
var todo = require('./models/todo').todo;

var todos = [
    { title: 'GLV', description: 'Hacer GLV' },
    { title: 'Compilar', description: 'Compilar con TFS Utils' },
    { title: 'Pruebas', description: 'Ejecutar Pruebas' },
    { title: 'Autotesting', description: 'Ejecutar Autotesting' },
    { title: 'Checkin', description: 'Hacer Checkin' },
    { title: 'Build', description: 'Esperar el Build' },
    { title: 'DavidE', description: 'DavidE' }
    ];

var findTodos = function(query) {
    return promise.cast(todo.find(query).exec());
}

exports.connectDb = promise.promisify(mongoose.connect, mongoose);
exports.findTodos = findTodos;

var createTodo = promise.promisify(todo.create, todo);

exports.seedTodos = function() {
    return findTodos({}).then(function(collection) {
        if(collection.length === 0) {
            return promise.map(todos, function(atodo){
                return createTodo(atodo);
            });
        }
    });
}