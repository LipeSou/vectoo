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
