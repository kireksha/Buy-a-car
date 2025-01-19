import { observer } from "mobx-react-lite";
import { FC } from "react";
import CarsStore from "../../store/cars-store";
import style from "./Favorite.module.css";
import { CarCard } from "../../components";
import { useLocalStorage } from "usehooks-ts";

export const Favorite: FC = observer(() => {
  const [storageItem] = useLocalStorage<number[]>("favorites", []);
  const { cars } = CarsStore;

  return (
    <div className={style.favContainer}>
      <p className={style.favContainer__header}>
        Избранные товары - {storageItem.length} позиций
      </p>
      <ul className={style.cardsList}>
        {Array.isArray(cars) &&
          storageItem &&
          cars
            .filter((car) => storageItem.includes(car.id))
            .map(
              (car) =>
                car && (
                  <CarCard
                    key={car.id}
                    id={car.id}
                    brand={car.brand}
                    model={car.model}
                    color={car.color}
                    modelYear={car.model_year}
                    imgSrc={car.img_src}
                    price={car.price}
                    isAvailable={car.availability}
                    description={car.description}
                  />
                )
            )}
      </ul>
    </div>
  );
});
