import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
import Faq from './pages/Faq';
import About from './pages/About';

function App() {
  return (
    <Router basename="/brahmajijnasa">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
