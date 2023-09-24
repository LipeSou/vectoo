import Link from 'next/link';
import styles from './header.module.css';
import NavBarMenu from './navbarMenu/NavBarMenu';

export default function Header() {
  return (
    <header className={styles.container}>

      <div className={styles.logoAndNabBarContainer}>
        {/* logo */}
        <Link href="/" className={styles.logo}>Vectoo</Link>

        {/* logo hamburger menu mobile */}
        <label htmlFor="menuMobile" className={styles.menuMobileLabel}>
          <input id="menuMobile" type="checkbox" className={styles.menuMobile} />
          <div className={styles.menuButton} />

          {/* navbar menu */}
          <NavBarMenu />

        </label>
      </div>

    </header>
  );
}
