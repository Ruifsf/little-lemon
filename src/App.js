import './App.css';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/reserve" element={<Reserve />}/>
      <Route path="/confirmed" element={<ConfirmedBooking />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
