import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientsList from './components/ClientsList';
import ClientProjectsList from './components/ClientProjectsList';
import FeedbackForm from './components/FeedbackForm';
import './index.css'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ClientsList />} />
          <Route path="/:client" element={<ClientProjectsList />} />
          <Route path="/:client/project/:auditName" element={<FeedbackForm />} />
        </Routes>
      </Router>
  );
};

export default App;
