import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerList from './CustomerList';
import styles from '../styles/Layout.module.css'; 

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CustomerList />
      </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
