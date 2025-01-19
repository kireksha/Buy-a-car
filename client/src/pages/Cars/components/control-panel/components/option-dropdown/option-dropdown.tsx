import { MouseEventHandler, useEffect, useRef } from "react";
import style from "./option-dropdown.module.css";
import { P1 } from "../../../../../../components/text";

type Option = { title: string; value: string };
interface IOptionProps {
  option: Option;
  onClick: (value: Option["value"]) => void;
}

export const OptionDropdown = (props: IOptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: Option["value"]): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(value);
      }
    };

    option.addEventListener("keydown", handleEnterKeyDown);
    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [value, onClick]);

  return (
    <li
      className={style.option}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      ref={optionRef}
    >
      <P1>{title}</P1>
    </li>
  );
};
