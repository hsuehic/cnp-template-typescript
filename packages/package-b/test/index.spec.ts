import { myPackage } from '../src';

describe('package-b', () => {
  it('should return a string containing the message', () => {
    const message = 'Hello';

    const result = myPackage(message);

    expect(result).toMatch(message);
  });
});
