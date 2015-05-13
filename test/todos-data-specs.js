var expect = require('chai').expect;
var promise = require('bluebird');
var todoModel = require('../models/todo');

var mongoose = require('mongoose');
var connectDb = promise.promisify(mongoose.connect, mongoose);

function resetTodos() {
    return new promise(function(resolve, reject) {
        mongoose.connection.collections['todos'].drop(resolve, reject);
    });
}

function findTodos(query) {
    return promise.cast(mongoose.model('todo').find(query).exec());
}

describe("get todos", function() {
    it("should never be empty since todo are seeded", function(done) {
        connectDb('mongodb://despinalr:lpdp451789@ds033419.mongolab.com:33419/todo')
        .then(resetTodos)
        .then(todoModel.seedTodos)
        .then(findTodos)
        .then(function(todos) {
            expect(todos.length).to.be.at.least(1);
            done();
        });
    });
});