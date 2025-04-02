import { Global } from "@emotion/react";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { GLOBAL_STYLES } from "./styles/global.styles";
import { Header } from "./components/Header";
import { FavoritePage } from "./pages/FavoritePage";
import { CarsPage } from "./pages/CarsPage/CarsPage";

const App: FC = () => {
  return (
    <div>
      <Global styles={GLOBAL_STYLES} />
      <Header />
      <Routes>
        <Route path="/" element={<CarsPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<CarsPage />} />
      </Routes>
    </div>
  );
};

export default App;
