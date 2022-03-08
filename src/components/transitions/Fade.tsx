import { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

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
        enter: 200,
        exit: 100,
      }}
      in={isShown}
      classNames="visible"
      unmountOnExit
    >
      <div ref={divRef} aria-hidden={!isShown}>
        {children}
      </div>
    </CSSTransition>
  );
}
