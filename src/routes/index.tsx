import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import CustomerPage from '../pages/CustomerPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="customer/:id" element={<CustomerPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;