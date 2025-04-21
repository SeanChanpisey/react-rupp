import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Main from './asset/admin/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public layout with navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* Add more public routes here if needed */}
        </Route>

        {/* Admin layout without public navbar */}
        <Route path="/admin" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
