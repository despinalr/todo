var mongoose = require('mongoose');
var promise = require('bluebird');

var todoSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});

var todo = mongoose.model('todo', todoSchema);

var todos = [
    { title: 'GLV', description: 'Hacer GLV' },
    { title: 'Compilar', description: 'Compilar con TFS Utils' },
    { title: 'Pruebas', description: 'Ejecutar Pruebas' },
    { title: 'Autotesting', description: 'Ejecutar Autotesting' },
    { title: 'Checkin', description: 'Hacer Checkin' },
    { title: 'Build', description: 'Esperar el Build' }
    ];

function findTodos(query) {
    return promise.cast(mongoose.model('todo').find(query).exec());
}

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