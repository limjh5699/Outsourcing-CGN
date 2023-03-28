import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import RegistPage from "./pages/registPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route path="/regist" Component={RegistPage} />
    </Routes>
  );
};

export default Router;
