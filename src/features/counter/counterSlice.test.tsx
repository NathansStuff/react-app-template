import { store } from '@context/store';

import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
  setValue,
} from './counterSlice';

describe('Counter redux state tests', () => {
  afterEach(() => store.dispatch(setValue(0)));
  it('should initially load the state with a count of 0', () => {
    const state = store.getState().counter;
    expect(state.value).toEqual(0);
  });

  it('calling increment should increment the count by 1', () => {
    store.dispatch(increment());
    const state = store.getState().counter;
    expect(state.value).toEqual(1);
  });

  it('calling decrement should decrease the count by 1', () => {
    store.dispatch(decrement());
    const state = store.getState().counter;
    expect(state.value).toEqual(-1);
  });

  it('calling setValue should reset the counter to 0', () => {
    store.dispatch(increment());
    store.dispatch(setValue(0));
    const state = store.getState().counter;
    expect(state.value).toEqual(0);
  });

  it('calling setValue should set the counter to 10', () => {
    store.dispatch(setValue(10));
    const state = store.getState().counter;
    expect(state.value).toEqual(10);
  });

  it('calling incrementByAmount should plus 10 to the counter', () => {
    store.dispatch(incrementByAmount(10));
    const state = store.getState().counter;
    expect(state.value).toEqual(10);
  });

  it('counter slice should have the correct name', () => {
    expect(counterSlice.name).toEqual('counter');
  });
});
