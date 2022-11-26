import { IInput } from './Input';

export const mockInputProps: IInput = {
  heading: 'Hello World',
  placeholder: 'Enter your name',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  id: 'input-id',
  showErrors: false,
};

export const mockErrorInputProps: IInput = {
  heading: 'Hello World',
  placeholder: 'Enter your name',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  id: 'input-id',
  showErrors: true,
};

export const mockTextInputProps: IInput = {
  heading: 'Hello World',
  placeholder: 'Enter your name',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  value: 'John Doe',
  id: 'input-id',
  showErrors: false,
};
