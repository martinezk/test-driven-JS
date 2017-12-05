var assert = require('assert');
describe("ArrayTest", function() {
    it("test array splice should modify array", function(){
        var arr = [1, 2, 3, 4, 5];
        var result = arr.splice(2, 3);

        assert.deepEqual ([3, 4, 5], result);
    })
})