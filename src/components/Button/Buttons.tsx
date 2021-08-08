import React from 'react';
import styles from './Buttons.module.css';

export interface IButtonProps {}

export const Button: React.FC<IButtonProps> = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export const TextButton: React.FC<IButtonProps> = props => {
  return <button className={styles.textButton}>{props.children}</button>;
};

