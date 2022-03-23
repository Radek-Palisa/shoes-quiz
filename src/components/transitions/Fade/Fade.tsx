import { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Fade.module.css';

type Props = {
  isShown: boolean;
  children: ReactNode;
};

export default function Fade({ isShown, children }: Props) {
  const divRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={divRef}
      timeout={{
        appear: 300,
        exit: 100,
        enter: 400,
      }}
      in={isShown}
      classNames={{
        enter: styles.enter,
        exit: styles.exit,
        appear: styles.appear,
        appearActive: styles['appear-active'],
        enterActive: styles['enter-active'],
        exitActive: styles['exit-active'],
      }}
      appear
      unmountOnExit
    >
      <div className={styles.root} ref={divRef} aria-hidden={!isShown}>
        {children}
      </div>
    </CSSTransition>
  );
}
