TestCase("ArrayTest",  {
    "test array splice should not modify array": function(){
        var arr = [1, 2, 3, 4, 5];
        var result = arr.aplice(2, 3);

        assertEquals ([1, 2, 3, 4, 5], arr);
    }
})