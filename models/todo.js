var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});

var todo = mongoose.model('todo', todoSchema);

exports.seedTodos = function() {
    todo.find({}, function(err, todos) {
        if(todos.length === 0) {
            todo.create({ title: 'GLV', description: 'Hacer GLV' });
            todo.create({ title: 'Compilar', description: 'Compilar con TFS Utils' });
            todo.create({ title: 'Pruebas', description: 'Ejecutar Pruebas' });
            todo.create({ title: 'Autotesting', description: 'Ejecutar Autotesting' });
            todo.create({ title: 'Checkin', description: 'Hacer Checkin' });
            todo.create({ title: 'Build', description: 'Esperar el Build' });
        }
    });
}