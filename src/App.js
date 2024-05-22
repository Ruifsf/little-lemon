import './App.css';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/reserve" element={<Reserve />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
