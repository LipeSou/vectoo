import Link from 'next/link';
import styles from './madeWithLove.module.css';

export default function MadeWithLove() {
  return (
    <p>
      Made with 💛 by
      {' '}
      <Link
        className={styles.link}
        href="https://www.linkedin.com/in/felipe-sou/"
        target="_blank"
        rel="noreferrer"
      >
        Felipe Souto

      </Link>
    </p>
  );
}
