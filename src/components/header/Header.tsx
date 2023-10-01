'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

export default function Header() {
  const pathname = usePathname();

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
          <ul className={styles.navbar}>
            <li className={styles.navbarLiMenu}>
              <Link href="/" className={pathname ? styles.linkActive : styles.link}>Home</Link>
            </li>
            <li className={styles.navbarLiMenu}>
              <Link href="/about" className={styles.link}>About</Link>
            </li>
            <li className={styles.navbarLiMenu}>
              <Link href="/images" className={styles.link}>Get Images</Link>
            </li>

            {/* checkbox change theme */}
            <div className="themeContainer">
              <label htmlFor="theme" className="themeSwitch">
                <p className={styles.mobileChangeTheme}>Theme</p>
                <div className="themeSwitchWrapper">
                  <input id="theme" type="checkbox" />
                  <div className="themeSwitchButton" />
                </div>
              </label>
            </div>
          </ul>

        </label>
      </div>

    </header>
  );
}
