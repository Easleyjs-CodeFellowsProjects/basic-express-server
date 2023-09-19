const serverError = require('./error_404');

describe('Testing our 404 error handler', () => {
  test('Should return a 404 when prompted', () => {

    const err = {
      code: 404,
      message: 'PAGE NOT FOUND'
    }
    const req = {}
    // all res methods return the same res object
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(() => res),
    }
    const next = jest.fn();

    serverError(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'PAGE NOT FOUND' });
  });
});