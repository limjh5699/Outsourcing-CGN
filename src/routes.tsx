import { Routes, Route } from "react-router-dom";
import EventPage from "./components/main/eventPage/event";
import MainPage from "./pages/mainPage";
import PlacePage from "./pages/placePage";
import RegistPage from "./pages/registPage";
import TimeTablePage from "./pages/timeTablePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route path="/regist" Component={RegistPage} />
      <Route path="/time" Component={TimeTablePage} />
      <Route path="/place" Component={PlacePage} />
      <Route path="/event" Component={EventPage} />
    </Routes>
  );
};

export default Router;
