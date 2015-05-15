var bodyParser = require('body-parser');

module.exports = function(db, app) {
    app.use(bodyParser.json());
    
    app.post('/api/todos', function(req, res) {
        db.saveTodo(req.body);
        res.end();
    });
}