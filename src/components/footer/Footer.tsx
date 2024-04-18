'use client';

import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import MadeWithLove from '../madeWithLove/madeWithLove';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section className={styles.madeWithLove}>
          <MadeWithLove />
        </section>

        <section>
          <nav>
            <h2 className={styles.contactMe}>Resources</h2>
            <ul className={styles.linkContainer}>
              <li>
                <Link
                  className={styles.link}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="/images"
                >
                  Get Images
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <h2 className={styles.contactMe}>Contact Me</h2>
          <ul className={styles.linkContainer}>
            <li>
              <Link
                className={styles.link}
                href="https://www.linkedin.com/in/felipe-sou/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Linkedin</p>
                {' '}
                <LinkedinLogo size={24} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="https://github.com/LipeSou"
                target="_blank"
                rel="noreferrer"
              >
                <p>Github</p>
                {' '}
                <GithubLogo size={24} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="https://www.instagram.com/felipesou__/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Instagram</p>
                {' '}
                <InstagramLogo size={24} />
              </Link>
            </li>
          </ul>

        </section>
      </div>

    </footer>
  );
}
