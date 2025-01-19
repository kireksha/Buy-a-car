import { Global } from "@emotion/react";
import { FC, useEffect } from "react";
import { Cars, Favorite } from "./pages/index";
import { GLOBAL_STYLES } from "./styles/global.styles";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import style from "./App.module.css";
import { useQuery } from "@apollo/client";
import { NEW_CARS } from "./query/get-cars";
import { Query } from "./graphql/generated";
import { observer } from "mobx-react-lite";
import CarsStore from "./store/cars-store";

const App: FC = observer(() => {
  const { loading, error, data } = useQuery<{
    cars: Query["cars"];
  }>(NEW_CARS);
  const { addCarsToStore } = CarsStore;

  useEffect(() => {
    if (!loading && data) {
      addCarsToStore(data.cars);
    }
  }, [data]);
  return (
    <>
      <Global styles={GLOBAL_STYLES} />
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <main className={style.main}>
          <Routes>
            <Route path="/" element={<Cars />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </main>
      )}
    </>
  );
});

export default App;
