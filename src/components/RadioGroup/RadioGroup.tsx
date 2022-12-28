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
  onChange: (value: string | boolean) => void;
  value: string | boolean | number | undefined | null;
}

export function RadioGroup({
  title,
  options,
  value,
  showErrors,
  onChange,
}: IRadioGroup): JSX.Element {
  const componentOptions: string[] = [];
  options.map((option) => componentOptions.push(option.value.toString()));

  const [selected, setSelected] = useState<string | null>(getInitialSelected());

  function getInitialSelected(): string | null {
    if (value === undefined || value === null) {
      return null;
    }
    return value.toString();
  }

  function haveErrors(): boolean {
    return showErrors && !selected;
  }

  function handleChange(clickedOption: string): void {
    setSelected(clickedOption);

    const selectedOption = options.find(
      (option) => option.value.toString() === clickedOption
    ) as IOption;
    onChange(selectedOption.value);
  }

  return (
    <div data-testid='radioGroup' className='py-2'>
      <HUIRadioGroup
        value={selected}
        onChange={handleChange}
        className='w-full'
      >
        {/* Title */}
        <HUIRadioGroup.Label className='fieldHeading' as='p'>
          {title}
        </HUIRadioGroup.Label>
        <HUIRadioGroup.Label className='sr-only'>{title}</HUIRadioGroup.Label>
        <div
          data-testid='radioGroupOptionDiv'
          className='flex space-x-2 w-full'
        >
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
                    relative flex cursor-pointer rounded-lg p-2 hover:shadow-md w-full border transition ease-in-out hover:scale-110 duration-300 `)
              }
            >
              {/* Inner Card */}
              {({ checked }): JSX.Element => (
                <HUIRadioGroup.Label
                  as='p'
                  data-testid='radioGroupOptionText'
                  className={trimClassname(
                    `fieldHeading centerFull text-center pb-0 px-3 ${
                      checked ? checkedClass : uncheckedClass
                    }`
                  )}
                >
                  {
                    options.find(
                      (option) => option.value.toString() === componentOption
                    )?.label
                  }
                </HUIRadioGroup.Label>
              )}
            </HUIRadioGroup.Option>
          ))}
        </div>
      </HUIRadioGroup>
    </div>
  );
}

// For testing purposes, constants and exported instead of being inlined
export const checkedClass = 'text-white';
export const uncheckedClass = 'text-gray-900';
export const errorClass = 'error';
