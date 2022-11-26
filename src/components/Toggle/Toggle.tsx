import { useState } from 'react';

import { Switch } from '@headlessui/react';

export interface IToggle {
  initiallyChecked?: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * A toggle component that can be used for any purpose
 *
 * @param {boolean} initiallyChecked - Optional    - The initial state of the toggle - (true = checked, false = unchecked) - default is false
 * @param {function} onChange        - Required    - The function to be called when the toggle is clicked - Note: the component will handle the state of the toggle
 *
 * @author Nathan O'Donnell
 * @date 28-10-2022
 * @version 1
 */
export function Toggle({
  initiallyChecked = false,
  onChange,
}: IToggle): JSX.Element {
  const [checked, setChecked] = useState(initiallyChecked);

  function handleChange(): void {
    onChange(!checked);
    setChecked((checked) => !checked);
  }
  return (
    <Switch
      data-testid='toggle'
      checked={checked}
      onChange={handleChange}
      className={`${
        checked ? activeClass : inactiveClass
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

// For testing purposes, constants and exported instead of being inlined
export const activeClass = 'bg-blue-600';
export const inactiveClass = 'bg-gray-200';
