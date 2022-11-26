import { useState } from 'react';
import { trimClassname } from 'src/utils/styleHelper';

import { RadioGroup as HUIRadioGroup } from '@headlessui/react';

interface IOption {
  label: string;
  value: string | boolean;
  id: string;
}
export interface IRadioGroup {
  title: string;
  options: IOption[];
  showErrors: boolean;
  initialValue?: number;
  onChange: (value: string | boolean) => void;
}
export function RadioGroup({
  title,
  options,
  initialValue,
  showErrors,
  onChange,
}: IRadioGroup): JSX.Element {
  const componentOptions: string[] = [];
  options.map((option) => componentOptions.push(option.label));

  const [selected, setSelected] = useState<string | null>(
    initialValue !== undefined ? componentOptions[initialValue] : null
  );

  function haveErrors(): boolean {
    return showErrors && !selected;
  }

  function handleChange(clickedOption: string): void {
    setSelected(clickedOption);
    const selectedOption = options.find(
      (option) => option.label === clickedOption
    ) as IOption;
    onChange(selectedOption.value);
  }

  return (
    <div data-testid='radioGroup' className='w-full px-4 py-16'>
      <div className='mx-auto w-full max-w-md'>
        <HUIRadioGroup
          value={selected}
          onChange={handleChange}
          className='w-full'
        >
          <HUIRadioGroup.Label className='fieldHeading' as='p'>
            {title}
          </HUIRadioGroup.Label>
          <HUIRadioGroup.Label className='sr-only'>{title}</HUIRadioGroup.Label>
          <div className='flex space-x-2 w-full'>
            {componentOptions.map((componentOption) => (
              // Outside Card
              <HUIRadioGroup.Option
                key={componentOption}
                data-googleid={
                  options[componentOptions.indexOf(componentOption)].id
                }
                value={componentOption}
                data-testid='radioGroupOptionCard'
                className={({ active, checked }): string =>
                  trimClassname(`${active ? 'inputButtonFocus' : ''}
                  ${checked ? 'bg-secondary text-white' : ''} ${
                    haveErrors() ? errorClass : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg p-2 shadow-md  w-full border `)
                }
              >
                {/* Inner Card */}
                {({ checked }): JSX.Element => (
                  <HUIRadioGroup.Label
                    as='p'
                    data-testid='radioGroupOptionText'
                    className={trimClassname(
                      `fieldHeading text-center ${
                        checked ? checkedClass : uncheckedClass
                      }`
                    )}
                  >
                    {componentOption}
                  </HUIRadioGroup.Label>
                )}
              </HUIRadioGroup.Option>
            ))}
          </div>
        </HUIRadioGroup>
      </div>
    </div>
  );
}

// For testing purposes, constants and exported instead of being inlined
export const checkedClass = 'text-white';
export const uncheckedClass = 'text-gray-900';
export const errorClass = 'error';
