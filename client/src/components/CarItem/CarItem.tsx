import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import classNames from "classnames";
import { Car as CarType } from "../../graphql/generated";
import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { addFavoriteCars } from "../../redux/slices/favoriteSlice";
import { Button } from "../Button/Button";
import s from "./CarItem.module.css";

export const CarItem = (car: CarType) => {
  const dispatch = useAppDispatch();
  let [carFavorite, setCarFavorite] = useState(false);
  const isAvailable = car.availability;

  const addCarToFavorites = () => {
    if (isAvailable) setCarFavorite(!carFavorite);
    dispatch(addFavoriteCars(car));
  };

  return (
    <div className={s.carContainer}>
      <div className={s.carInfo}>
        <div
          className={classNames(s.imageContainer, {
            [s.unavailable]: !isAvailable,
          })}
        >
          <img src={car.img_src} alt={`${car.brand} ${car.model}`} />
          {!isAvailable && (
            <div className={s.unavailableOverlay}>Нет в наличии</div>
          )}
        </div>
        <h3>
          {car.brand} {car.model}
        </h3>
        <div className={s.yearAndColor}>
          <p>Год: {car.model_year}</p>
          <p> Цвет: {car.color}</p>
        </div>
        <p className={s.price}> от {car.price}</p>

        <div className={s.buttonAndFavorite}>
          <Button disabled={!isAvailable}>Купить</Button>
          <span
            className={classNames(s.iconFavorite, {
              [s.active]: carFavorite,
              [s.disabled]: !isAvailable,
            })}
            onClick={isAvailable ? addCarToFavorites : undefined}
          >
            {carFavorite ? (
              <MdFavorite size={30} />
            ) : (
              <MdFavoriteBorder size={30} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
