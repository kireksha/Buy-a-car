import { useState } from "react";
import style from "./header.module.css";
import { HeaderLeft, HeaderRight } from "./components";

export const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  return (
    <header className={style.header}>
      <HeaderLeft
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />
      <HeaderRight />
    </header>
  );
};
