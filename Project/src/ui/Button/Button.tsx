import { FC, HTMLAttributes } from 'react';
import './Button.css'
import { Loader } from '../Loader';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  classname?: string;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className,
  kind = "primary",
  type,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={className}
      data-kind={kind}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
