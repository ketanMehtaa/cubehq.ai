import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomerDetails from '../components/CustomerDetails';
import { Customer } from '../types/customer';
import { fetchCustomers } from '../services/api';

const CustomerPage: React.FC = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadCustomer = async () => {
      const customers = await fetchCustomers();
      const foundCustomer = customers.find(c => c.id === parseInt(id || ''));
      setCustomer(foundCustomer || null);
    };

    loadCustomer();
  }, [id]);

  return <CustomerDetails customer={customer} />;
};

export default CustomerPage;