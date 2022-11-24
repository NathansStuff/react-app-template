import { render, screen } from '@testing-library/react';
import { Button, EButtonType, getButtonTypeClassName } from './Button';
import { mockButtonProps } from './Button.mocks';

describe('Button', () => {
  describe('The Button component', () => {

    function renderButton(): void {
      render(<Button {...mockButtonProps} />);
    }

    it('renders without errors', () => {
      renderButton();
      expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    it('renders the correct text', () => {
      renderButton();
      expect(screen.getByTestId('button')).toHaveTextContent(
        `${mockButtonProps.children}`
      );
    });

    it('calls the onClick function when clicked', () => {
      const onClick = jest.fn();
      render(<Button {...mockButtonProps} onClick={onClick} />);
      screen.getByTestId('button').click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when the type is DISABLED', () => {
      render(<Button {...mockButtonProps} type={EButtonType.DISABLED} />);
      expect(screen.getByTestId('button')).toBeDisabled();
    });

    it('is not disabled when the type is not DISABLED', () => {
      render(<Button {...mockButtonProps} type={EButtonType.PRIMARY} />);
      expect(screen.getByTestId('button')).not.toBeDisabled();
    });

    it('has the correct class name when the type is PRIMARY', () => {
      render(<Button {...mockButtonProps} type={EButtonType.PRIMARY} />);
      expect(screen.getByTestId('button')).toHaveClass(
        getButtonTypeClassName(EButtonType.PRIMARY)
      );
    });

    it('has the correct class name when the type is PRIMARY_INVERTED', () => {
      render(
        <Button {...mockButtonProps} type={EButtonType.PRIMARY_INVERTED} />
      );
      expect(screen.getByTestId('button')).toHaveClass(
        getButtonTypeClassName(EButtonType.PRIMARY_INVERTED)
      );
    });

    it('has the correct class name when the type is SUCCESS', () => {
      render(<Button {...mockButtonProps} type={EButtonType.SUCCESS} />);
      expect(screen.getByTestId('button')).toHaveClass(
        getButtonTypeClassName(EButtonType.SUCCESS)
      );
    });

    it('has the correct class name when the type is DISABLED', () => {
      render(<Button {...mockButtonProps} type={EButtonType.DISABLED} />);
      expect(screen.getByTestId('button')).toHaveClass(
        getButtonTypeClassName(EButtonType.DISABLED)
      );
    });
  });

  describe('getButtonTypeClassName function', () => {
    it('returns the correct class name for the given button type', () => {
      expect(getButtonTypeClassName(EButtonType.PRIMARY)).toBe(
        'bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded h-full focus:bg-primaryFocus'
      );
      expect(getButtonTypeClassName(EButtonType.PRIMARY_INVERTED)).toBe(
        'h-full bg-primary border-primary  text-white px-4 hover:text-primary hover:bg-white focus:text-primaryFocus focus:border-primaryFocus'
      );
      expect(getButtonTypeClassName(EButtonType.SUCCESS)).toBe(
        'px-2 text-white bg-green'
      );
      expect(getButtonTypeClassName(EButtonType.DISABLED)).toBe(
        'bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded h-full hover:cursor-auto'
      );
    });
  });
});
