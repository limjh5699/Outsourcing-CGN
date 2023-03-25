import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
    </Routes>
  );
};

export default Router;
