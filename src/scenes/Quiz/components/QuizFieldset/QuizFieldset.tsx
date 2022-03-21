import { ReactNode } from 'react';
import styles from './QuizFieldset.module.css';

type Props = {
  children: ReactNode;
};

export default function QuizFieldset({ children }: Props) {
  return (
    // nested div needed because applying flexbox to a fieldset directly
    // doesn't work
    <fieldset>
      <div className={styles.root}>{children}</div>
    </fieldset>
  );
}
