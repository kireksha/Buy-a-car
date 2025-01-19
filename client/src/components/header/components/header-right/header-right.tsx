import { Link } from "react-router-dom";
import { H4 } from "../../../text";
import style from "./header-right.module.css";
import { IconHeart } from "../../../icon";

export const HeaderRight = () => {
  return (
    <div className={style.headerRightContainer}>
      <div className={style.contactInfo}>
        <H4 className={style.contactInfo__address}>
          Москва, Волгоградский пр-кт, 43, стр 1
        </H4>
        <H4 className={style.contactInfo__phone}>+7 800 555 35 35</H4>
      </div>
      <Link to="/favorite" className={style.favLink}>
        <IconHeart className={style.heartIcon} />
        <H4>Избранное</H4>
      </Link>
    </div>
  );
};
