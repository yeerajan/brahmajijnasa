import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter basename="/brahmajijnasa">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
