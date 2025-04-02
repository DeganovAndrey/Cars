import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectFavoriteCar } from "../../redux/selectors/selectFavoriteCar";
import { deleteFavoriteCars } from "../../redux/slices/favoriteSlice";
import { Button } from "../Button/Button";
import s from "./FavoriteCar.module.css";

export const FavoriteCar = () => {
  const dispatch = useAppDispatch();
  const favoriteCar = useSelector(selectFavoriteCar);

  const removeFavoriteCars = (id: number) => {
    dispatch(deleteFavoriteCars(id));
  };

  return (
    <div className={s.carContainer}>
      {favoriteCar.length > 0 && (
        <h2>
          Избранные товары - {favoriteCar.length}{" "}
          {favoriteCar.length % 10 === 1 && favoriteCar.length !== 11
            ? "позиция"
            : favoriteCar.length % 10 >= 2 &&
              favoriteCar.length % 10 <= 4 &&
              (favoriteCar.length < 12 || favoriteCar.length > 14)
            ? "позиции"
            : "позиций"}
        </h2>
      )}

      {favoriteCar.length > 0 ? (
        favoriteCar.map((car) => (
          <div key={car.id} className={s.car}>
            <div>
              <img src={car.img_src} alt={`${car.brand} ${car.model}`} />
            </div>
            <div className={s.carInfo}>
              <p className={s.brandAndModel}>
                {car.brand} {car.model}
              </p>
              <div className={s.infoCar}>
                <p className={s.description}>{car.description}</p>
                <p>Год: {car.model_year}</p>
                <p className={s.color}> Цвет: {car.color}</p>
              </div>
              <p className={s.price}> от {car.price}</p>
              <div className={s.buttonAndFavorite}>
                <Button>Выбрать комплетацию</Button>
                <span
                  className={s.deleteIcon}
                  onClick={() => removeFavoriteCars(car.id)}
                >
                  <RiDeleteBin5Line size={30} />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 style={{ marginTop: 20 }}>В избранном нет автомобилей</h3>
      )}
      <hr style={{ opacity: 0.3 }} />
    </div>
  );
};
