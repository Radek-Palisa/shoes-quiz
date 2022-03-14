import { ReactNode } from 'react';
import styles from './Heading.module.css';

type HeadingType = 'h1' | 'h2';

const typeToHtml: Record<HeadingType, 'h1' | 'h2'> = {
  h1: 'h1',
  h2: 'h2',
};

type Props = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'legend'; // or etc as needed.
  type?: HeadingType;
  color?: 'primary' | 'inverted';
};

export default function Heading({
  children,
  as,
  type = 'h1',
  color = 'primary',
}: Props) {
  // if `as` is not provided, assign a default html based on `type` prop.
  const HtmlElement = as ?? typeToHtml[type];

  const className = [
    styles.Heading,
    styles[`Heading--type-${type}`],
    styles[`Heading--color-${color}`],
  ].join(' ');

  return <HtmlElement className={className}>{children}</HtmlElement>;
}
