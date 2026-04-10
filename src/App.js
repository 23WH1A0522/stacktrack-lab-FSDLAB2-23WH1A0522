import React from 'react';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<QuestionPage />} />
        </Routes>
      </Router>

      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
