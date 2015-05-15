var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');

var todoSaved;
var db = {
    saveTodo: function(todo) {
        todoSaved = todo;
    }
};
var todoService = require('../todo-services')(db, app);

describe("save todos", function() {
    
    var newTodo = { title: 'GLV', description: 'Hacer GLV' };
    it("should pass the todo to the db save", function(done) {
        request(app).post('/api/todos').send(newTodo).end(function(err, res) {
            expect(todoSaved).to.deep.equal(newTodo);
            done();
        });
    });
    
});