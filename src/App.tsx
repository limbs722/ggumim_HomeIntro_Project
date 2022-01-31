import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeIntro } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeIntro />} />
      </Routes>
    </BrowserRouter>
  );
}
