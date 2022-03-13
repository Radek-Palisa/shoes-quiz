import { ReactNode } from 'react';
import styles from './HomeBackground.module.css';

type Props = {
  children: ReactNode;
};

export default function HomeBackground({ children }: Props) {
  return <div className={styles.HomeBackground}>{children}</div>;
}
