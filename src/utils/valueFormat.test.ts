import { getBoolean, getNumber } from './valueFormat';

describe('valueFormat', () => {
  describe('getNumber', () => {
    it('testing a number', () => {
      expect(getNumber('1')).toBe(1);
    });
    it('testing a max value', () => {
      expect(getNumber('11', 9)).toBe(9);
    });
    it('testing boolean', () => {
      expect(getNumber(false)).toBe(0);
    });
    it('testing NaN', () => {
      expect(getNumber('string')).toBe(0);
    });
  });

  describe('getBoolean', () => {
    it('testing a boolean true', () => {
      expect(getBoolean(true)).toBe(true);
    });
    it('testing a boolean false', () => {
      expect(getBoolean(false)).toBe(false);
    });
    it('testing a true string', () => {
      expect(getBoolean('true')).toBe(true);
    });
    it('testing a random string', () => {
      expect(getBoolean('random')).toBe(false);
    });
  });
});
