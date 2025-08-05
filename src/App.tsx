import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Prenotazione from './prenotazione';
import MainLayout from './layouts/MainLayout';
import ConfermaPrenotazione from './conferma-prenotazione';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/prenotazione" element={<Prenotazione />} />
          <Route path="/conferma-prenotazione" element={<ConfermaPrenotazione />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
