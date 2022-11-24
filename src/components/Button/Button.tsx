export enum EButtonType {
  PRIMARY = 'PRIMARY',
  PRIMARY_INVERTED = 'PRIMARY_INVERTED',
  SUCCESS = 'SUCCESS',
  DISABLED = 'DISABLED',
}

export interface IButton {
  children: React.ReactNode;
  onClick: () => void;
  type?: EButtonType;
}

/**
 * A button component that can be used for any purpose
 *
 * @param {React.ReactNode} children  - Required    - The text or other elements to be displayed in the button
 * @param {function} onClick          - Required    - The function to be called when the button is clicked
 * @param {ButtonType} type           - Optional    - The type of button to be displayed, default is PRIMARY
 *
 * @author Nathan
 * @date 12-09-2022
 * @version 1
 */
export function Button({
  children,
  onClick,
  type = EButtonType.PRIMARY,
  ...rest
}: IButton): JSX.Element {
  return (
    <button
      data-testid="button"
      className={`btn border p-1 flex justify-center items-center w-full rounded-lg font-bold transition duration-500 transform ${getButtonTypeClassName(
        type
      )}`}
      onClick={onClick}
      disabled={type === EButtonType.DISABLED}
      {...rest}
    >
      {children}
    </button>
  );
}

export function getButtonTypeClassName(type: EButtonType): string {
  switch (type) {
    case EButtonType.SUCCESS:
      return 'px-2 text-white bg-green';
    case EButtonType.PRIMARY:
      return 'bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded h-full focus:bg-primaryFocus';
    case EButtonType.PRIMARY_INVERTED:
      return 'h-full bg-primary border-primary  text-white px-4 hover:text-primary hover:bg-white focus:text-primaryFocus focus:border-primaryFocus';
    case EButtonType.DISABLED:
      return 'bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded h-full hover:cursor-auto';
  }
}
