const server = require('../lib/server.js');

describe('Test for app in our server', () => {
    test('Should have an app property', () => {
        expect(typeof server.app).toEqual('function');
    })
})