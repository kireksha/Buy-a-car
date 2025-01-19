import { ReactNode } from "react";
import { TEXT } from "../../styles/text";
import style from "./text.module.css";

interface IH4Props {
  children: ReactNode;
  className?: string;
}

export const H4 = ({ children, className }: IH4Props) => {
  const { fontFamily, fontWeight, fontSize, lineHeight } = TEXT.H4;
  return (
    <h4
      style={{ fontFamily, fontWeight, fontSize, lineHeight }}
      className={`${style.title} ${className}`}
    >
      {children}
    </h4>
  );
};
