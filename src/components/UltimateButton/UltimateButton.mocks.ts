import { IUltimateButtonProps } from './UltimateButton';

export const mockUltimateButtonProps: IUltimateButtonProps = {
  text: 'Button',
  onClick: emptyFunction,
};

// Example empty function for mocking and testing purposes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function emptyFunction(): void {
  return;
}
