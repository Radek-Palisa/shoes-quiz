import { ReactNode } from 'react';
import styles from './Caption.module.css';

type Props = {
  children: ReactNode;
  as?: 'h1' | 'p';
  color?: 'primary' | 'inverted';
  align?: 'left' | 'center';
};

export default function Caption({
  children,
  as: HtmlElement = 'p',
  color = 'primary',
  align = 'left',
}: Props) {
  const className = [
    styles.root,
    styles[`color-${color}`],
    styles[`align-${align}`],
  ].join(' ');

  return <HtmlElement className={className}>{children}</HtmlElement>;
}
