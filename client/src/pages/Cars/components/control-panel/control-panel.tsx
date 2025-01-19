import { SortDropdown } from "./components/sort-dropdown/sort-dropdown";
import style from "./control-panel.module.css";
import options from "./components/options.json";
import { Search } from "./components/search/search";

interface IControlPanelProps {
  sortString: string;
  setSortString: (value: string | ((prevVar: string) => string)) => void;
  setSearchText: (value: string | ((prevVar: string) => string)) => void;
}

export const ControlPanel = (props: IControlPanelProps) => {
  const { sortString, setSortString, setSearchText } = props;
  const handleSortSelect = (value: string) => {
    setSortString(value);
  };
  const selectedSortString = options.find((item) => item.value === sortString);

  return (
    <div className={style.controlPanel}>
      <SortDropdown
        options={options}
        selected={selectedSortString || null}
        onChange={handleSortSelect}
        placeholder="Отсортировать"
      />
      <Search setSearchText={setSearchText} />
    </div>
  );
};
