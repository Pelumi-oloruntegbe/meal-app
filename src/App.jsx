import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, SingleMeal, ErrorPage } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { Navigate } from 'react-router-dom';

function App() {
 

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<Navigate to="/" />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/meal/:mealId" element={<SingleMeal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
