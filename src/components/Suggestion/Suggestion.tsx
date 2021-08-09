import React, { ReactNode } from 'react';
import { TextButton } from '../Button/Buttons';
import styles from './Suggestion.module.css';

export interface ISuggestionProps {
  username: string;
  note: string;
  image?: string;
  outline?: boolean;
}

const Outline = (props: { children: ReactNode }) => {
  return (
    <div className={styles.outline}>
      <div className={styles.tinLine}>{props.children}</div>
    </div>
  );
};

const Suggestion: React.FC<ISuggestionProps> = props => {
  return (
    <div className={styles.suggestion}>
      <div className={styles.accountPic}>
        {props.outline ? (
          <Outline>
            <div className={styles.imageWrapper}>
              <img
                src={props.image}
                className={styles.image}
                alt={props.username}
              />
            </div>
          </Outline>
        ) : (
          <div className={styles.imageWrapper}>
            <img
              src={props.image}
              className={styles.image}
              alt={props.username}
            />
          </div>
        )}
      </div>

      <div className={styles.accountWrapper}>
        <div className={styles.usernameWrapper}>
          <span className={styles.username}>{props.username}</span>
        </div>
        <div className={styles.note}>{props.note}</div>
      </div>

      <div className={styles.actionWrapper}>
        <TextButton>Follow</TextButton>
      </div>
    </div>
  );
};

export default Suggestion;
