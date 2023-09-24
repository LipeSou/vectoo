'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbarMenu.module.css';

export default function NavBarMenu() {
  const pathname = usePathname();

  return (
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
  );
}
