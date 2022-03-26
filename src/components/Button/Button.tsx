import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  onClick: () => void;
  onMouseOver?: () => void;
  color?: 'primary' | 'secondary' | 'inverted';
  width?: 'full' | 'min' | 'auto';
};

export default function Button({
  children,
  onClick,
  onMouseOver,
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
      type="button"
      onMouseOver={onMouseOver}
    >
      {children}
    </button>
  );
}
