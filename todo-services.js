var bodyParser = require('body-parser');

module.exports = function(db, app) {
    app.use(bodyParser.json());
    
    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });
    
    app.get('/api/todos', function(req, res) {
        db.findTodos().then(function(todos) {
            res.send(todos);
        });
    });
    
    app.post('/api/todos', function(req, res) {
        db.saveTodo(req.body).then(function(newTodo) {
            res.send(newTodo);
        });
    });
    
    app.delete('/api/todos/:_id', function(req, res) {
        db.removeTodo(req.params._id);
        res.end();
    });
}