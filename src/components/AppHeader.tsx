import styles from './AppHeader.module.css';
import LogoIcon from './icons/LogoIcon';

export default function AppHeader() {
  return (
    <header className={styles.AppHeader}>
      <a href="/">
        <LogoIcon />
      </a>
    </header>
  );
}
