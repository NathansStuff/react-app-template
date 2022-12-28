import { ChangeEvent } from 'react';

import { trimClassname } from '@/utils/styleHelper';

export interface IInput {
  title: string;
  placeholder: string;
  id: string;
  onChange: (value: string) => void;
  showErrors: boolean;
  value?: string;
}

/**
 * Input component
 *
 * @param {string} heading - Required - Heading of the input field
 * @param {string} placeholder - Required - Placeholder of the input field
 * @param {string} id - Required - Id of the input field
 * @param {function} onChange - Required - Function to be called when input value changes. Takes the new value as a parameter
 * @param {boolean} showErrors - Required - Boolean to show errors
 * @param {string} value - Optional - Value of the input field
 *
 * @returns {JSX.Element} - Input component
 * @example <Input heading="Heading" placeholder="Placeholder" id="id" onChange={(value)=>{}} showErrors={true} />
 *
 * @author Nathen O'Donnell
 * @date 2022-10-30
 * @version 1.0.0
 */
export function Input({
  title,
  placeholder,
  id,
  value,
  showErrors,
  onChange,
}: IInput): JSX.Element {
  function haveErrors(): boolean {
    return showErrors && !value;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    onChange(value);
  }

  return (
    <div data-testid='input' className='w-full px-4 py-2'>
      <div className='mx-auto w-full max-w-md'>
        <h1 className='fieldHeading'>{title}</h1>
        <input
          className={trimClassname(
            `hover:shadow appearance-none border rounded-lg mx-auto w-full max-w-md p-2 text-textPrimary leading-tight inputButtonFocus placeholderStyle text-center ${
              haveErrors() ? errorClass : ''
            }`
          )}
          id={id}
          type='text'
          data-testid='inputField'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export const errorClass = 'error';
