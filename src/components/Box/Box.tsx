import { ReactNode } from 'react';
import styles from './Box.module.css';

type Space = 'none' | 'spaceMd';

type Props = {
  children: ReactNode;
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center';
  gap?: Space;
  padding?: Partial<{
    inline: Space;
    block: Space;
  }>;
};

export default function Box({
  children,
  direction = 'column',
  alignItems = 'start',
  gap = 'spaceMd',
  padding,
}: Props) {
  const className = [
    styles.root,
    styles[`direction-${direction}`],
    styles[`align-items-${alignItems}`],
    styles[`gap-${gap}`],
    styles[`padding-inline-${padding?.inline ?? 'none'}`],
    styles[`padding-block-${padding?.block ?? 'none'}`],
  ].join(' ');

  return <div className={className}>{children}</div>;
}
