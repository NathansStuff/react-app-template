import { IToggle } from './Toggle';

export const mockToggleProps: IToggle = {
  initiallyChecked: true,
  onChange: emptyFunction,
};

// Example empty function for mocking and testing purposes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function emptyFunction(_value: boolean): void {
  return;
}
