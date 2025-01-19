import searchLoupeSvg from "./search.svg";
import { Button } from "../../../../../../components/button/button";
import style from "./search.module.css";
import { useState } from "react";

interface ISearchProps {
  setSearchText: (value: string | ((prevVar: string) => string)) => void;
}

export const Search = ({ setSearchText }: ISearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setSearchText("");
    }
    setInputValue(e.currentTarget.value);
  };

  function handleSearchClick() {
    setSearchText(inputValue);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchClick();
      }}
      className={style.searchContainer}
    >
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        className={style.searchContainer__input}
        placeholder="Найти авто"
      />
      <Button
        onClick={handleSearchClick}
        className={style.searchContainer__searchBtn}
      >
        <img src={searchLoupeSvg} alt="Иконка поиска" />
      </Button>
    </form>
  );
};
