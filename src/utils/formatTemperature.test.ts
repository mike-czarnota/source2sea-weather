import { formatTemperature } from './formatTemperature';

describe('testing formatTemperature.test.ts', () => {
  it('should format temp correctly', () => {
    expect(formatTemperature(39)).toBe('39°C');
  });
});
