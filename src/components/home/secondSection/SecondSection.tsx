import Screen from './screen/Screen';
import styles from './second-section.module.css';

export default function SecondSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customize your way </h2>
      <p className={styles.description}>
        Customize the image with the face of your project or product.
      </p>
      <Screen />
    </div>
  );
}
