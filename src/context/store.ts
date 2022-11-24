import logger from 'redux-logger';

import counterReducer from '@features/counter/counterSlice';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

// ...

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMiddleware(env: string): any[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const middleware: any[] = [];
  if (env !== 'production' && env !== 'test') {
    middleware.push(logger);
  }
  return middleware;
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getMiddleware('local')),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
