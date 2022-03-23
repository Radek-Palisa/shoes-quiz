import { ReactNode } from 'react';
import styles from './Box.module.css';

type Space = 'none' | 'spaceMd';

type Props = {
  children: ReactNode;
  as?: 'div' | 'ul' | 'li';
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center';
  justifyContent?: 'start' | 'center';
  gap?: Space;
  padding?: Partial<{
    inline: Space;
    block: Space;
  }>;
  height?: 'auto' | 'full';
  position?: 'static' | 'relative';
};

export default function Box({
  children,
  as: HtmlElement = 'div',
  direction = 'column',
  alignItems = 'start',
  justifyContent = 'start',
  gap = 'spaceMd',
  padding,
  height = 'auto',
  position = 'static',
}: Props) {
  const className = [
    styles.root,
    styles[`direction-${direction}`],
    styles[`align-items-${alignItems}`],
    styles[`justify-content-${justifyContent}`],
    styles[`gap-${gap}`],
    styles[`padding-inline-${padding?.inline ?? 'none'}`],
    styles[`padding-block-${padding?.block ?? 'none'}`],
    styles[`height-${height}`],
    styles[`position-${position}`],
  ].join(' ');

  return <HtmlElement className={className}>{children}</HtmlElement>;
}
