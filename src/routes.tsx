import { Routes, Route } from "react-router-dom";
import Event from "./components/main/eventPage/event";
import MainPage from "./pages/mainPage";
import RegistPage from "./pages/registPage";
import TimeTablePage from "./pages/timeTablePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route path="/regist" Component={RegistPage} />
      <Route path="/time" Component={TimeTablePage} />
      <Route path="/event" Component={Event} />
    </Routes>
  );
};

export default Router;
