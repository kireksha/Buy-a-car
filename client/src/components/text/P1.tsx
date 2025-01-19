import { ReactNode } from "react";
import { TEXT } from "../../styles/text";
import style from "./text.module.css";

interface IP1Props {
  children: ReactNode;
  className?: string;
}

export const P1 = ({ children, className }: IP1Props) => {
  const { fontFamily, fontWeight, fontSize, lineHeight } = TEXT.P1;
  return (
    <p
      style={{ fontFamily, fontWeight, fontSize, lineHeight }}
      className={`${style.paragraph} ${className}`}
    >
      {children}
    </p>
  );
};
