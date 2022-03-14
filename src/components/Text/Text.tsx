import { ReactNode } from 'react';
import styles from './Text.module.css';

type TextType = 'small' | 'body';

const typeToHtml: Record<TextType, 'small' | 'p'> = {
  small: 'small',
  body: 'p',
};

type Props = {
  children: ReactNode;
  as?: 'small' | 'p';
  type?: TextType;
  color?: 'primary' | 'secondary';
};

export default function Text({
  children,
  as,
  type = 'body',
  color = 'primary',
}: Props) {
  const HtmlElement = as ?? typeToHtml[type];

  const className = [
    styles.root,
    styles[`type-${type}`],
    styles[`color-${color}`],
  ].join(' ');

  return <HtmlElement className={className}>{children}</HtmlElement>;
}
