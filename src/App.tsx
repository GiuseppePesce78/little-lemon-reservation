import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Prenotazione from "./pages/booking";
import MainLayout from "./layouts/MainLayout";
import ConfermaPrenotazione from "./pages/booking-confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/prenotazione" element={<Prenotazione />} />
        </Route>
        <Route
          path="/conferma-prenotazione"
          element={<ConfermaPrenotazione />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
