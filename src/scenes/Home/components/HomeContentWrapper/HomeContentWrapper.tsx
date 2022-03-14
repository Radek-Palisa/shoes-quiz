import { ReactNode } from 'react';
import styles from './HomeContentWrapper.module.css';

type Props = {
  children: ReactNode;
};

export default function HomeContentWrapper({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
