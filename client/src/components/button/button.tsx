import { ReactNode } from "react";
import style from "./button.module.css";

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  disabled,
  className,
}: IButtonProps) => {
  return (
    <button
      className={`${className} ${style.button}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
