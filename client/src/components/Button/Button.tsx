import { FC, ReactNode } from "react";
import s from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, disabled }) => {
  const className = disabled ? `${s.button} ${s.disabledButton}` : s.button;

  return (
    <button disabled={disabled} type="button" className={className}>
      {children}
    </button>
  );
};
