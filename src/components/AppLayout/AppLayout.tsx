import { ReactNode } from 'react';
import styles from './AppLayout.module.css';

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return <div className={styles.AppLayout}>{children}</div>;
}
