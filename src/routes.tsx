import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import RegistPage from "./pages/registPage";
import TimeTablePage from "./pages/timeTablePage";
import FAQPage from "./pages/FAQPage";
import PlacePage from "./pages/placePage";
import EventPage from "./pages/eventPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route path="/regist" Component={RegistPage} />
      <Route path="/time" Component={TimeTablePage} />
      <Route path="/FAQ" Component={FAQPage} />
      <Route path="/place" Component={PlacePage} />
      <Route path="/event" Component={EventPage} />
    </Routes>
  );
};

export default Router;
