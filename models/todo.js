var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});

exports.todo = mongoose.model('todo', todoSchema);
