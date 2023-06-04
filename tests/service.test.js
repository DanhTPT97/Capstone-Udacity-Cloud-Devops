const fs = require('fs');
const Service = require('../src/service');

jest.mock('fs');

describe('should test Service', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('when #list method succeeds', async () => {
    const responseData = [{ field: 'field1' }, { field: 'field2' }];
    fs.readFileSync.mockReturnValue(JSON.stringify(responseData));

    const response = await Service.list();
    expect(response).toEqual(responseData);
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  });

  test('when #list method fails', async () => {
    const errorMessage = 'Cannot load data';
    try {
      const errorData = new Error(errorMessage);
      fs.readFileSync.mockImplementation(() => { throw new Error(); });
      await Service.list();
      throw errorData;
    } catch (error) {
      expect(error.message).toEqual(errorMessage);
      expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    }
  });
});
