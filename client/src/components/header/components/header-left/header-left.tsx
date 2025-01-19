import HeaderLogo from "../../logo/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "../../../button/button";
import { H4 } from "../../../text";
import style from "./header-left.module.css";
import { observer } from "mobx-react-lite";
import CarsStore from "../../../../store/cars-store";

interface IHeaderLeftProps {
  isOpenDropdown: boolean;
  setIsOpenDropdown: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export const HeaderLeft = observer(
  ({ isOpenDropdown, setIsOpenDropdown }: IHeaderLeftProps) => {
    const { cars } = CarsStore;
    const brands = cars.map((car) => car.brand);
    const uniqueBrands = new Set(brands);

    return (
      <div className={style.headerLeft}>
        <Link className={style.logoLink} to="/">
          <img src={HeaderLogo} />
        </Link>
        <Button
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          className={style.headerBtn}
        >
          <div className={`${style.hamMenu} ${isOpenDropdown && style.active}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <H4>Каталог</H4>
        </Button>
        {isOpenDropdown && (
          <ul className={style.catalogList}>
            {Array.from(uniqueBrands).map((brand, i) => (
              <li key={i} className={style.catalogList__item}>
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);
