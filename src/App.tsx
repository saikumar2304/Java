import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TypePage from './pages/TypePage';
import PlaygroundPage from './pages/PlaygroundPage';
import SearchPage from './pages/SearchPage';
import ComparePage from './pages/ComparePage';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <div className="flex-1 flex">
            <Sidebar />
            <div className="flex-1 ml-64">
              <main className="p-8">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/type/:typeName" element={<TypePage />} />
                  <Route path="/playground" element={<PlaygroundPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/compare" element={<ComparePage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;