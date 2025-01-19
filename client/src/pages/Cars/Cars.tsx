import { FC, useEffect, useState } from "react";
import { Query } from "../../graphql/generated";
import { ControlPanel } from "./components";
import options from "./components/control-panel/components/options.json";
import { SORT_FUNCTIONS } from "./components/sort-functions";
import { observer } from "mobx-react-lite";
import CarsStore from "../../store/cars-store";
import { CarCard } from "../../components/car-card/car-card";
import style from "./Cars.module.css";

export const Cars: FC = observer(() => {
  const { addCarsToStore, cars } = CarsStore;
  const [searchText, setSearchText] = useState<string>("");
  const [sortString, setSortString] = useState("");

  useEffect(() => {
    if (!sortString) {
      return;
    }
    const sortedItems = sortFn(cars, options);
    if (Array.isArray(sortedItems)) {
      addCarsToStore(sortedItems);
    }
  }, [sortString]);

  const sortFn = (
    arr: unknown,
    sortType: { title: string; value: string; key: string; type: string }[]
  ) => {
    const key = sortType.find((item) => item.value === sortString)?.key;
    const type = sortType.find((item) => item.value === sortString)?.type;
    const f = SORT_FUNCTIONS[String(type)];
    return (
      Array.isArray(arr) && key && [...arr].sort((a, b) => f(a[key], b[key]))
    );
  };

  return (
    <>
      <div>
        <ControlPanel
          sortString={sortString}
          setSortString={setSortString}
          setSearchText={setSearchText}
        />
        <ul className={style.cardsList}>
          {Array.isArray(cars) &&
            cars
              .filter((car) =>
                car.brand.toLowerCase().includes(searchText.toLowerCase())
              )
              .map(
                (car: Query["car"]) =>
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
                    />
                  )
              )}
        </ul>
      </div>
    </>
  );
});
