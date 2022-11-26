import { Provider } from 'react-redux';
import { AppStore, rootReducer, RootState } from 'src/context/store';

import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import {
  act,
  fireEvent,
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

export function renderRedux(
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

export function clickElement(
  element: Element | Node | Document | Window
): void {
  act(() => {
    fireEvent.click(element);
  });
}

export function inputTextOnElement(
  element: Element | Node | Document | Window,
  newValue: string
): void {
  act(() => {
    fireEvent.change(element, { target: { value: newValue } });
  });
}

export * from '@testing-library/react';
