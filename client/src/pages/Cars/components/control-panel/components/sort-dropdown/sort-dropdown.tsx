import { useState, useRef, useEffect, MouseEventHandler } from "react";
import style from "./sort-dropdown.module.css";
import { IconSort } from "../../../../../../components/icon";
import { OptionDropdown } from "../option-dropdown/option-dropdown";
import { P1 } from "../../../../../../components/text";

type Option = { title: string; value: string };
interface ISortDropdownProps {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  status?: "default" | "invalid";
  onChange?: (selected: Option["value"]) => void;
  onClose?: () => void;
}
export const SortDropdown = (props: ISortDropdownProps) => {
  const {
    options,
    placeholder,
    status = "default",
    selected,
    onChange,
    onClose,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev);
      }
    };

    placeholderEl.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (value: Option["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.selectWrapper} ref={rootRef} data-is-active={isOpen}>
      <div className={style.iconSort}>
        <IconSort />
      </div>
      <div
        className={style.placeholder}
        data-status={status}
        data-selected={!!selected?.value}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        <P1>{selected?.title || placeholder}</P1>
      </div>
      {isOpen && (
        <ul className={style.select}>
          {options.map((option) => (
            <OptionDropdown
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
