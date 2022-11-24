import { Provider } from 'react-redux';
import { AppStore, rootReducer, RootState } from 'src/context/store';

import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

// This function is a wrapper around the render function from RTL. It takes in
// a component and renders it with the Redux store and any other options that
// are passed in.

function reducer(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
): RenderResult {
  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

interface WrapperProps {
  children: React.ReactNode;
}

export * from '@testing-library/react';
export { reducer };
