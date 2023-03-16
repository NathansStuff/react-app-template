export interface IUltimateButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'icon';
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  // You can add more optional props as needed
}

function getPrimaryColor(
  variant: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'icon'
): string {
  switch (variant) {
    case 'secondary':
      return 'gray';
    case 'destructive':
      return 'red';
    case 'ghost':
      return 'white';
    default:
    case 'primary':
    case 'icon':
      return 'blue';
  }
}

function getSizeClass(size: 'small' | 'medium' | 'large' | 'xlarge'): string {
  switch (size) {
    case 'small':
      return 'text-sm';
    case 'large':
      return 'text-lg';
    case 'xlarge':
      return 'text-xl';
    default:
    case 'medium':
      return 'text-base';
  }
}

function trimWhiteClassname(className: string): string {
  if (className.includes('-white-')) {
    return (
      className.slice(0, className.indexOf('-white-')) +
      className.slice(className.indexOf('-white-') + 6)
    );
  } else {
    return className;
  }
}

export function UltimateButton({
  text,
  onClick,
  type = 'button',
  size = 'medium',
  variant = 'primary',
  disabled = false,
  icon = null,
  className = '',
  style = {},
  ariaLabel,
}: IUltimateButtonProps): JSX.Element {
  // Generate the button's CSS classes based on the provided props
  const sizeClass = getSizeClass(size);
  const buttonClasses = `button ${variant} ${sizeClass} ${className}`;

  const primaryColor = getPrimaryColor(variant);

  // Render the button component
  return (
    <button
      type={type}
      className={`px-4 py-2  text-white dark:text-black font-semibold rounded-lg ring-offset-2 border

  ${trimWhiteClassname(`bg-${primaryColor}-600`)}
  ${trimWhiteClassname(`border-${primaryColor}-700`)}
      ${trimWhiteClassname(`dark:bg-${primaryColor}-300`)}
  ${trimWhiteClassname(`dark:border-${primaryColor}-400`)}

                hover:ring-2
  ${trimWhiteClassname(`hover:bg-${primaryColor}-500`)}
  ${trimWhiteClassname(`hover:border-${primaryColor}-800`)}
  ${trimWhiteClassname(`hover:ring-${primaryColor}-500`)}
  ${trimWhiteClassname(`dark:hover:bg-${primaryColor}-200`)}
  ${trimWhiteClassname(`dark:hover:border-${primaryColor}-300`)}
  ${trimWhiteClassname(`dark:hover:ring-${primaryColor}-200`)}

        focus:outline-none
  ${trimWhiteClassname(`focus:bg-${primaryColor}-400`)}
  ${trimWhiteClassname(`focus:border-${primaryColor}-500`)}
  ${trimWhiteClassname(`dark:focus:bg-${primaryColor}-100`)}
  ${trimWhiteClassname(`dark:focus:border-${primaryColor}-200`)}

  ${trimWhiteClassname(`active:bg-${primaryColor}-600`)}
  ${trimWhiteClassname(`active:border-${primaryColor}-700`)}
  ${trimWhiteClassname(`dark:active:bg-${primaryColor}-300`)}
  ${trimWhiteClassname(`dark:active:border-${primaryColor}-400`)}
  ${trimWhiteClassname(`dark:active:ring-${primaryColor}-300`)}

              disabled:border-none
        disabled:bg-gray-200
        disabled:text-gray-500
        dark:disabled:bg-gray-700


      ${variant} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
      aria-label={ariaLabel || undefined}
    >
      {icon && <span className='button-icon'>{icon}</span>}
      {text}
    </button>
  );
}
