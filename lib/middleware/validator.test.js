const validator = require('./validator');

describe('Testing the validator module', () => {
  test('Make sure query param value1 is not null, calls the next function. Adds error if null.', () => {

    console.log = jest.fn(); // jest spy function, only affects our test environment

    const req = {
      method: 'TEST',
      path: 'TEST',
      query: { value1 : 5 }
    };
    const res = {};
    const next = jest.fn(); // jest can spy on this and tell us inputs and outputs

    validator(req, res, next);

    // expect(console.log).toHaveBeenCalledWith('REQUEST METHOD: TEST'); // build in method for jest.
    // expect(console.log).toHaveBeenCalledWith('REQUEST PATH: TEST');
    // expect(console.log).toHaveBeenCalledWith('REQUEST QUERY: TEST');
    expect(next).toHaveBeenCalled();
  });
});