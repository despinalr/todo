var express = require('express');
var app = express();
var cons = require('consolidate');

var mongoose = require('mongoose').connect('mongodb://localhost/todo');
var todoModel = require('./models/todo');

app.set('views', __dirname);
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

mongoose.connection.once('open', function() {
    console.log('Connected to MongoDB!!!!!');
    todoModel.seedTodos();
});

app.get('/api/todos', function(req, res) {
    mongoose.model('todo').find({}, function(err, todos) {
        res.send(todos);
    });
});

app.listen(process.env.PORT, process.env.IP);