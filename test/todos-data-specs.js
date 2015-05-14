var expect = require('chai').expect;
var promise = require('bluebird');
var mongoose = require('mongoose');

var tododata = require('../todo-data.js');

function resetTodos() {
    return new promise(function(resolve, reject) {
        mongoose.connection.collections['todos'].drop(resolve, reject);
    });
}

describe("get todos", function() {
    
    var todos;
    
    before(function(done) {
        tododata.connectDb('mongodb://despinalr:lpdp451789@ds033419.mongolab.com:33419/todo')
        .then(resetTodos)
        .then(tododata.seedTodos)
        .then(tododata.findTodos)
        .then(function(todoCollection) {
            todos = todoCollection;
            done();
        });
    });
    
    it("should never be empty since todo are seeded", function() {
        expect(todos.length).to.be.at.least(1);
    });
    
    it("should have title", function() {
        expect(todos[0].title).to.not.be.empty;
    });
    
    it("should have description", function() {
        expect(todos[0].description).to.not.be.empty;
    });
});
