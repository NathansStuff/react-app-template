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
    <div data-testid='input'>
      <h1 className='fieldHeading px-4'>{title}</h1>
      <input
        className={trimClassname(
          `shadow appearance-none border rounded-xl w-full p-2 text-textPrimary leading-tight inputButtonFocus placeholderStyle text-center ${
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
  );
}

export const errorClass = 'error';
