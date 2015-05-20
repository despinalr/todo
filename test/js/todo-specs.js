describe("posting todos", function() {
    
    var postRequestTodo;
    var newTodo = { title: 'title', description: 'description' };
    
    beforeEach(module('app'));
    
    it("should call api/todos with todo data", inject(function($httpBackend, todos) {
        $httpBackend.whenPOST('/api/todos', function(data) {
            postRequestTodo = JSON.parse(data);
            expect(postRequestTodo).to.not.be.empty;
            return true;
        }).respond(200);
        todos.save(newTodo);
        $httpBackend.flush();
    }));
    
});