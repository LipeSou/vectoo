'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      {/* logo */}

      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>Vectoo</Link>

        {/* logo hamburger menu mobile */}
        {/* {!showMenu && isMobile && (
          <svg onClick={() => setShowMenu((currentState) => !currentState)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu ">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}

        {showMenu && isMobile && (
          <svg onClick={() => setShowMenu((currentState) => !currentState)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )} */}
        <div className="themeContainer">
          <label htmlFor="menuMobile" className={styles.menuMobileLabel}>
            <input id="menuMobile" type="checkbox" className={styles.menuMobile} />
            <div className={styles.menuButton} />
          </label>
        </div>

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

      </div>
    </header>
  );
}
