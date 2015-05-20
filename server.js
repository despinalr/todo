var express = require('express');
var app = express();
var cons = require('consolidate');
var tododata = require('./todo-data');
require('./todo-services')(tododata, app);

app.set('views', __dirname);
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client'));

tododata.connectDb('mongodb://despinalr:lpdp451789@ds033419.mongolab.com:33419/todo').then(function() {
    console.log('Connected to MongoDB!!!!!');
    tododata.seedTodos();
});

app.listen(process.env.PORT, process.env.IP);
