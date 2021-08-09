import React from 'react';
import styles from './Buttons.module.css';

export interface IButtonProps {
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export const TextButton: React.FC<IButtonProps> = props => {
  let classes = [styles.textButton];
  if (props.disabled) {
    classes = [styles.textButton, styles.textButtonDisabled];
  } else {
    classes = [styles.textButton];
  }
  return <button className={classes.join(' ')}>{props.children}</button>;
};
