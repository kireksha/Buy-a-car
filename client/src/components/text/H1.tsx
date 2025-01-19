import { ReactNode } from "react";
import { TEXT } from "../../styles/text";
import style from "./text.module.css";

interface IH1Props {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: IH1Props) => {
  const { fontFamily, fontWeight, fontSize, lineHeight } = TEXT.H1;
  return (
    <h1
      style={{ fontFamily, fontWeight, fontSize, lineHeight }}
      className={`${style.title} ${className}`}
    >
      {children}
    </h1>
  );
};
