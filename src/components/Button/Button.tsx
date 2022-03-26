import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  onClick: () => void;
  onMouseOver?: () => void;
  buttonType?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'inverted';
  width?: 'full' | 'min' | 'auto';
};

export default function Button({
  children,
  onClick,
  onMouseOver,
  buttonType = 'button',
  color = 'primary',
  width = 'min',
}: Props) {
  const className = [
    styles.root,
    styles[`color-${color}`],
    styles[`width-${width}`],
  ].join(' ');

  return (
    <button
      className={className}
      onClick={onClick}
      type={buttonType}
      onMouseOver={onMouseOver}
    >
      {children}
    </button>
  );
}
