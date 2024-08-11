import React from 'react';
import { Customer } from '../types/customer';
import PhotoGrid from './PhotoGrid';
import styles from '../styles/CustomerDetails.module.css';

interface Props {
  customer: Customer | null;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  if (!customer) {
    return <div>Select a customer to view details</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{customer.name}</h2>
      <p><strong>Title:</strong> {customer.title}</p>
      <p className={styles.address}><strong>Address:</strong> {customer.address}</p>
      <h3 className={styles.photosTitle}>Photos</h3>
      <PhotoGrid customerName={customer.name} />
    </div>
  );
};

export default CustomerDetails;
