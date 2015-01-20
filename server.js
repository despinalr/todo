var express = require('express');
var app = express();
var cons = require('consolidate');

app.set('views', __dirname);
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
    res.render('index');
});

app.listen(process.env.PORT, process.env.IP);