import React, { ReactNode } from 'react';
import styles from './Typography.module.css';

export interface TitleProps {
  children: ReactNode;
}

export const Title1 = (props: TitleProps) => {
  return <div className={styles.title1}>{props.children}</div>;
};

export const Title2 = (props: TitleProps) => {
  return <div className={styles.title2}>{props.children}</div>;
};

export interface TextBodyProps {
  children: ReactNode;
}

export const TextBody1 = (props: TextBodyProps) => {
  return <div className={styles.body1}>{props.children}</div>;
};

export const TextBody2 = (props: TextBodyProps) => {
  return <div className={styles.body2}>{props.children}</div>;
};
