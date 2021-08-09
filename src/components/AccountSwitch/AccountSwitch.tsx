import React from 'react';
import { TextButton } from '../Button/Buttons';
import styles from './AccountSwitch.module.css';

export interface IAccountSwitchProps {
  name: string;
  userName: string;
  image?: string;
}

const AccountSwitch: React.FC<IAccountSwitchProps> = props => {
  return (
    <div className={styles.account}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={props.image} alt={props.name} />
      </div>

      <div className={styles.user}>
        <div className={styles.username}>{props.userName}</div>
        <div className={styles.fullName}>{props.name}</div>
      </div>

      <div className={styles.buttonWrapper}>
        <TextButton>Switch</TextButton>
      </div>
    </div>
  );
};

export default AccountSwitch;
