const Controller = require('../src/controller');

const getSpy = jest.fn();

jest.doMock('express', () => ({
  Router() {
    return {
      get: getSpy,
    };
  },
}));

describe('should test router', () => {
  test('should test get posts', () => {
    // eslint-disable-next-line global-require
    require('../src/router');
    expect(getSpy).toHaveBeenCalledWith('/posts', Controller.getPosts);
  });
});
