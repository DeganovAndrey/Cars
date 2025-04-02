import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  selectCars,
  selectCarsError,
  selectCarsLoading,
} from "../../redux/selectors/selectCars";
import { loadedCars } from "../../redux/slices/carsSlice";
import { OnSelect } from "../../components/OnSelect/OnSelect";
import s from "./CarsPage.module.css";

export const CarsPage: FC = () => {
  const dispatch = useAppDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);
  useEffect(() => {
    dispatch(loadedCars());
  }, [dispatch]);

  return (
    <div className={s.cars}>
      <div className={s.container}>
        {loading ? (
          <h2 style={{ marginTop: 40, textAlign: "center" }}>Загрузка...</h2>
        ) : error ? (
          <h3 style={{ textAlign: "center" }}>Произошла ошибка: {error}</h3>
        ) : (
          <OnSelect initialCars={cars} />
        )}
      </div>
    </div>
  );
};
