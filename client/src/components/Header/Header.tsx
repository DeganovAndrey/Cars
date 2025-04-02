import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import s from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <h3 className={s.logoStart}>КУПИ</h3>
        <h3 className={s.logoEnd}>АВТО</h3>
        <NavLink to="/">
          <button type="button" className={s.button}>
            <span className={s.iconCatalog}>
              <FiMenu size={13} />
            </span>
            Каталог
          </button>
        </NavLink>
      </div>
      <div className={s.logoInfo}>
        <p className={s.logoAddress}>Москва, Волгоградский пр-кт, 43, стр.1</p>
        <p className={s.logoNumber}>+7 800 555 35 35</p>
        <NavLink to="/favorite">
          <div className={s.favorite}>
            <span className={s.iconFavorite}>
              <MdFavorite size={27} />
            </span>
            <p className={s.textFavorite}>Избранное</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
