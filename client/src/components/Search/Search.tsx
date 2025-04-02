import { useSelector } from "react-redux";
import { ChangeEvent, FC, MouseEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { useAppDispatch } from "../../redux/store";
import { selectCars } from "../../redux/selectors/selectCars";
import { selectSearch } from "../../redux/selectors/selectSearch";
import { setSearch, setSearchedCars } from "../../redux/slices/searchSlice";
import s from "./Search.module.css";

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);
  const cars = useSelector(selectCars);

  const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const matchesCars = cars.filter((car) =>
      car.brand.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setSearchedCars(matchesCars));
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target?.value));
  };
  return (
    <div className={s.search}>
      <input
        type="search"
        placeholder="Найти авто"
        value={search}
        onChange={handleSearchChange}
        className={s.input}
      />
      <button type="submit" onClick={handleSearch} className={s.searchButton}>
        <BsSearch size={12} className={s.searchIcon} />
      </button>
    </div>
  );
};
