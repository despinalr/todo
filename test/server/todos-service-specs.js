var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');
var promise = require('bluebird');

var todoSaved;
var db = {
    findTodos: function() {
        return new promise(function(resolve, reject) {
            resolve(["Todo 1"]);
        });
    },
    saveTodo: function(todo) {
        todoSaved = todo;
    }
};
var todoService = require('../../todo-services')(db, app);

describe("get todos", function() {
    
    it("should return a list of todos", function(done) {
        request(app).get('/api/todos').expect('Content-Type', /json/).end(function(err, res) {
            expect(res.body).to.be.a('Array');
            done();
        });
    });
    
});

describe("save todos", function() {
    
    var newTodo = { title: 'GLV', description: 'Hacer GLV' };
    it("should pass the todo to the db save", function(done) {
        request(app).post('/api/todos').send(newTodo).end(function(err, res) {
            expect(todoSaved).to.deep.equal(newTodo);
            done();
        });
    });
    
});