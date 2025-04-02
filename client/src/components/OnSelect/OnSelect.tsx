import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { setSelectedCars } from "../../redux/slices/onSelectSlice";
import { selectSelectedCars } from "../../redux/selectors/selectOnSelect";
import { selectSearchedCars } from "../../redux/selectors/selectSearch";
import { Car } from "../../graphql/generated";
import { CarItem } from "../CarItem";
import { Search } from "../Search";
import s from "./OnSelect.module.css";

interface CarState extends Car {}

export const OnSelect: FC<{ initialCars: CarState[] }> = ({ initialCars }) => {
  const dispatch = useAppDispatch();
  const selectedCars = useSelector(selectSelectedCars);
  const [filteredCars, setFilteredCars] = useState<CarState[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const searchedCars = useSelector(selectSearchedCars);

  useEffect(() => {
    dispatch(setSelectedCars(initialCars));
  }, [initialCars, dispatch]);

  useEffect(() => {
    let sortedCars = [...selectedCars];

    switch (sortBy) {
      case "newest":
        sortedCars.sort((a, b) => b.model_year - a.model_year);
        break;
      case "oldest":
        sortedCars.sort((a, b) => a.model_year - b.model_year);
        break;
      case "cheapest":
        sortedCars.sort((a, b) => {
          const priceA = parseFloat(a.price.substring(1) || a.price);
          const priceB = parseFloat(b.price.substring(1) || b.price);
          return priceA - priceB;
        });
        break;
      case "mostExpensive":
        sortedCars.sort((a, b) => {
          const priceA = parseFloat(a.price.substring(1) || a.price);
          const priceB = parseFloat(b.price.substring(1) || b.price);
          return priceB - priceA;
        });
        break;
      case "nameAZ":
        sortedCars.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "nameZA":
        sortedCars.sort((a, b) => b.brand.localeCompare(a.brand));
        break;
      case "available":
        sortedCars.sort(
          (a, b) => (b.availability ? 1 : 0) - (a.availability ? 1 : 0)
        );
        break;
      default:
        sortedCars = [...selectedCars];
    }

    setFilteredCars(sortedCars);
  }, [selectedCars, sortBy]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.filters}>
        <label className={s.select}>
          Сначала в наличии
          <select value={sortBy || ""} onChange={handleSortChange}>
            <option value="available">Сначала в наличии</option>
            <option value="nameAZ">По имени (A-Z)</option>
            <option value="nameZA">По имени (Z-A)</option>
            <option value="newest">Сначала новее</option>
            <option value="oldest">Сначала старше</option>
            <option value="cheapest">Сначала дешевле</option>
            <option value="mostExpensive">Сначала дороже</option>
          </select>
        </label>
        <div className={s.search}>
          <Search />
        </div>
      </div>
      <div className={s.cars}>
        {searchedCars.length > 0
          ? searchedCars.map((car) => <CarItem key={car.id} {...car} />)
          : filteredCars.map((car) => <CarItem key={car.id} {...car} />)}
      </div>
    </div>
  );
};
