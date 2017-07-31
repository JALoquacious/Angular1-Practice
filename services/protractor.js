it('should test service', function() {
    expect(element(by.id('alert')).element(by.model('message')).getAttribute('value'))
        .toEqual('test');
});