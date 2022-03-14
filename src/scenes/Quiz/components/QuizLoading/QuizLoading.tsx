import { ReactNode } from 'react';
import Box from '../../../../components/Box/Box';
import Loading from '../../../../components/Loading/Loading';
import styles from './QuizLoading.module.css';

type Props = {
  caption?: ReactNode;
};

export default function QuizLoading({ caption }: Props) {
  return (
    <div className={styles.root}>
      <Box height="full" alignItems="center" justifyContent="center">
        <Loading />
        {caption}
      </Box>
    </div>
  );
}
