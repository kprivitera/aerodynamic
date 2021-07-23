enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined
};

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean 
  type: ButtonTypes
};

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ children, className, onClick, type, disabled = false }) => {(
  <button
    className={className}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)};

export default Button;
