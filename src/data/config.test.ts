import { NODE_ENV } from './config';

describe('the constants in config.ts', () => {
  it('should be defined', () => {
    expect(NODE_ENV).toBeDefined();
  });
});
