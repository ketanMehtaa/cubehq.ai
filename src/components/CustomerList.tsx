import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Customer } from '../types/customer';
import CustomerCard from './CustomerCard';
import { fetchCustomers } from '../services/api';
import styles from '../styles/CustomerList.module.css';
const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadCustomers = async () => {
      const loadedCustomers = await fetchCustomers();
      setCustomers(loadedCustomers);
    };

    loadCustomers();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Customers</h2>
      {customers.map((customer) => (
        <Link
          key={customer.id}
          to={`/customer/${customer.id}`}
          className={styles.link}
        >
          <CustomerCard
            customer={customer}
            isSelected={customer.id === parseInt(id || '')}
          />
        </Link>
      ))}
    </div>
  );
};

export default CustomerList;
