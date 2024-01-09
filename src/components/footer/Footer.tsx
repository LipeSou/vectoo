'use client';

import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import MadeWithLove from '../madeWithLove/madeWithLove';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.madeWithLove}>
          <MadeWithLove />
        </div>
        <section>
          <h2 className={styles.contactMe}>Contact Me</h2>
          <div className={styles.linkContainer}>
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
          </div>

        </section>
      </div>

    </footer>
  );
}
