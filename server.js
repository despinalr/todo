var express = require('express');
var app = express();
var cons = require('consolidate');

var tododata = require('./todo-data');

app.set('views', __dirname);
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client'));

tododata.connectDb('mongodb://despinalr:lpdp451789@ds033419.mongolab.com:33419/todo').then(function() {
    console.log('Connected to MongoDB!!!!!');
    tododata.seedTodos();
});

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/api/todos', function(req, res) {
    tododata.findTodos().then(function(todos) {
        res.send(todos);
    });
});

app.listen(process.env.PORT, process.env.IP);
