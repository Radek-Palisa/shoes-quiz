import { ReactNode } from 'react';
import styles from './QuizLayout.module.css';

type Props = {
  children: ReactNode;
};

export default function QuizLayout({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
