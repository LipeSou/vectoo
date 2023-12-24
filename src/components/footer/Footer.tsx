import MadeWithLove from '../madeWithLove/madeWithLove';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <MadeWithLove />
    </footer>
  );
}
