'use client';

import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import Informations from './Informations';
import styles from './about-container.module.css';

export default function AboutContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <section>
          <Informations.Title title="Welcome 👋" />
          <Informations.Info info="This site arose from a desire to contribute in some way to the community and unite my passions for developing and drawing.
Vectoo is dedicated to offering a collection of original vector designs, crafted with love and available for free for your projects."
          />
        </section>
        <Informations.Divider />
        <section>
          <Informations.Title title="About license" />
          <Informations.Info info="You're granted full freedom to use them without any attribution or costs. However, that you refrain from attempting to replicate our platform, redistribute the illustrations, or develop integrations for them." />
        </section>
        <Informations.Divider />
        <section>
          <Informations.Title title="Contact Me" />
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
    </div>
  );
}
