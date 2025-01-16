import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const showSearchInput = location.pathname === '/search';
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      <Header showSearchInput={showSearchInput} />
      <main className={`content ${isHomePage ? 'content-homepage' : ''}`}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
