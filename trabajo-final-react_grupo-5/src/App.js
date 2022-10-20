import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juego from './components/Juego';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Juego />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}