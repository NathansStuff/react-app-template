import { IInput } from './Input';

export const mockInputProps: IInput = {
  title: 'Hello World',
  placeholder: 'Enter your name',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  id: 'input-id',
  showErrors: false,
};

export const mockErrorInputProps: IInput = {
  title: 'Hello World',
  placeholder: 'Enter your name',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  id: 'input-id',
  showErrors: true,
};

export const mockTextInputProps: IInput = {
  title: 'Hello World',
  placeholder: 'Enter your name',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  value: 'John Doe',
  id: 'input-id',
  showErrors: false,
};
