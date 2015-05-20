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
        db.saveTodo(req.body);
        res.end();
    });
}