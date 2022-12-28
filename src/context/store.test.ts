import { getMiddleware, rootReducer } from './store';

describe('setup store', () => {
  // it('should setup the store', () => {
  //   const store = setupStore();
  //   expect(store.getState().counterReducer.value).toEqual(0);
  // });

  // it('should setup the store with preloaded state', () => {
  //   const store = setupStore({ counterReducer: { value: 3 } });
  //   expect(store.getState().counterReducer.value).toEqual(3);
  // });

  describe('rootReducer', () => {
    // Note: This is a dumb test, if you have a more complex test, you should remove this
    it('should return the array of reducers', () => {
      expect(rootReducer).toBeTruthy();
    });
  });

  describe('getMiddleware function', () => {
    // Note: This test is only testing that the middleware function works as expected across different environments.
    // It is not testing the middleware itself.

    // Note: If you add or remove middleware, you will need to update this test.
    const originalEnv = process.env;

    describe.each`
      nodeEnv          | expectedMiddlewareLength
      ${'production'}  | ${0}
      ${'development'} | ${1}
      ${'test'}        | ${0}
    `(
      'when process.env.NODE_ENV="$nodeEnv"',
      ({ nodeEnv, expectedMiddlewareLength }) => {
        beforeEach(() => {
          jest.resetModules(); // Most important - it clears the cache
          process.env = {
            ...originalEnv,
            NODE_ENV: nodeEnv,
          };
        });

        afterEach(() => {
          process.env = originalEnv;
        });

        it(`should return "${expectedMiddlewareLength} middleware added to the store"`, () => {
          expect(getMiddleware(nodeEnv).length).toEqual(
            expectedMiddlewareLength
          );
        });
      }
    );
  });
});
