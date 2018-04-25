HASHtable = new HashMap(10);

T1 = {

    key: 21,
    value: "a",

}

T2 = {
    key : 31,
    value : "b",
}

T3 = {
    key : 5,
    value : "c",
}



describe('Тестирование HashMap', function() {

    it('Добавить элемент.', function() {
        HASHtable.addobject(T1);
        assert.equal(HASHtable.findelem(21),'a');
    });

    it('Добавить элемент.', function() {
        HASHtable.addobject(T3);
        assert.equal(HASHtable.findelem(5),"c");
    });

    it('Добавить элемент с коллизией.', function() {
        HASHtable.addobject(T2);
        assert.equal(HASHtable.findelem(31),'b');
    });


    it('Удалить элемент.', function() {
        HASHtable.delelem(5);
        assert.equal(HASHtable.findelem(5),'Not found');
    });

    it('Удалить элемент с коллизией.', function() {
        assert.equal(HASHtable.delelem(21),'Deleted');
    });


    it('Попытка удалить несуществующий элемент.', function() {
        assert.equal(HASHtable.delelem(7),'No elem');
    });
});
