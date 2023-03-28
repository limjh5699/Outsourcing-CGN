import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import RegistPage from "./pages/registPage";
import TimeTablePage from "./pages/timeTablePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route path="/regist" Component={RegistPage} />
      <Route path="/time" Component={TimeTablePage} />
    </Routes>
  );
};

export default Router;
