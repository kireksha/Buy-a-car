import { Button } from "../button/button";
import { IconHeart, IconTrash } from "../icon";
import { H2, H3, H4, P1 } from "../text";
import { useLocalStorage } from "usehooks-ts";
import style from "./car-card.module.css";
import { toChangePriceFormat } from "../../utils";

interface ICardsProps {
  id: number;
  brand: string;
  model: string;
  color: string;
  modelYear: number;
  imgSrc: string;
  price: string;
  isAvailable: boolean;
  description?: string;
}

export const CarCard = (props: ICardsProps) => {
  const isFavPage = window.location.href.includes("favorite");
  const [storageItem, setStorageItem] = useLocalStorage<number[]>(
    "favorites",
    []
  );
  const {
    id,
    brand,
    model,
    color,
    modelYear,
    imgSrc,
    price,
    isAvailable,
    description,
  } = props;
  const isFav = storageItem.includes(id);
  const handleToggleFav = (id: number) => {
    if (!isFav) {
      const newStorageItem = [...storageItem, id];
      setStorageItem(newStorageItem);
    } else {
      const newStorageItem = storageItem.filter(
        (savedId: number) => savedId !== id
      );
      setStorageItem(newStorageItem);
    }
  };

  return (
    <li className={`${style.card} ${isFavPage && style.isFavPage}`}>
      <div
        className={`${style.card__imgContainer} ${
          isFavPage && style.isFavPage
        }`}
      >
        <img
          src={`http://localhost:4000${imgSrc}`}
          className={`${!isAvailable && style.notAvailable}`}
          alt="фото машины"
        />
        {!isAvailable && (
          <div className={style.card__notAvailable}>
            <H3>Нет в наличии</H3>
          </div>
        )}
      </div>
      <div>
        <div className={`${style.card__info} ${isFavPage && style.isFavPage}`}>
          {isFavPage ? (
            <>
              <H2
                className={`${style.card__brand} ${style.isFavPage}`}
              >{`${brand} ${model}`}</H2>
              <P1 className={style.card__description}>{description}</P1>
            </>
          ) : (
            <H3 className={style.card__brand}>{`${brand} ${model}`}</H3>
          )}
          <div
            className={`${style.card__yearColor} ${
              isFavPage && style.isFavPage
            }`}
          >
            <P1
              className={`${style.card__year} ${isFavPage && style.isFavPage}`}
            >{`Год: ${modelYear}`}</P1>
            <P1 className={style.card__color}>{`Цвет: ${color}`}</P1>
          </div>
          {isFavPage ? (
            <H3
              className={`${style.price} ${style.isFavPage}`}
            >{`от ${toChangePriceFormat(price)}`}</H3>
          ) : (
            <H4 className={style.price}>{`от ${toChangePriceFormat(
              price
            )}`}</H4>
          )}
        </div>
        <div className={style.card__controlPanel}>
          <Button
            className={style.card__buyBtn}
            disabled={!isAvailable}
            onClick={() => console.log("Купить ", model, "за ", price)}
          >
            <H4>{isFavPage ? "Выбрать комплектацию" : "Купить"}</H4>
          </Button>
          <button
            onClick={() => handleToggleFav(id)}
            className={`${style.favBtn} ${isFav && style.isFav} ${
              isFavPage && style.isFavPage
            }`}
            disabled={!isAvailable}
          >
            {isFavPage ? <IconTrash /> : <IconHeart />}
          </button>
        </div>
      </div>
    </li>
  );
};
