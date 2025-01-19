import { ReactNode } from "react";
import { TEXT } from "../../styles/text";
import style from "./text.module.css";

interface IH2Props {
  children: ReactNode;
  className?: string;
}

export const H2 = ({ children, className }: IH2Props) => {
  const { fontFamily, fontWeight, fontSize, lineHeight } = TEXT.H2;
  return (
    <h2
      style={{ fontFamily, fontWeight, fontSize, lineHeight }}
      className={`${style.title} ${className}`}
    >
      {children}
    </h2>
  );
};
