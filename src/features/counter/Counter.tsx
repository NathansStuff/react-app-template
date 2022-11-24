import { useAppDispatch, useAppSelector } from 'src/context/storeHooks';

import { decrement, increment, selectCount } from './counterSlice';

export default function Counter(): JSX.Element {
  // *****STATE HOOKS*****
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  // *****EVENT HANDLERS*****
  function handleIncreaseClick(): void {
    dispatch(increment());
  }

  function handleDecreaseClick(): void {
    dispatch(decrement());
  }

  // *****RENDER*****
  return (
    <div data-testid='counter'>
      <div>
        <button
          aria-label='Increment value'
          data-testid='counter-increment'
          onClick={handleIncreaseClick}
        >
          Increment
        </button>
        <span data-testid='counter-value'>{count}</span>
        <button
          aria-label='Decrement value'
          data-testid='counter-decrement'
          onClick={handleDecreaseClick}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
