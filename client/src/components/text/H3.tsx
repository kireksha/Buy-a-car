import { ReactNode } from "react";
import { TEXT } from "../../styles/text";
import style from "./text.module.css";

interface IH3Props {
  children: ReactNode;
  className?: string;
}

export const H3 = ({ children, className }: IH3Props) => {
  const { fontFamily, fontWeight, fontSize, lineHeight } = TEXT.H3;
  return (
    <h3
      style={{ fontFamily, fontWeight, fontSize, lineHeight }}
      className={`${style.title} ${className}`}
    >
      {children}
    </h3>
  );
};
