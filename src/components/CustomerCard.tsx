import React from 'react';
import { Customer } from '../types/customer';
import styles from '../styles/CustomerCard.module.css';

interface Props {
  customer: Customer;
  isSelected: boolean;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected }) => {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : styles.default}`}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
