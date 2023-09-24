import Images, { ImagesExtructure } from '../images/Images';
import styles from './screen.module.css';

export default function Screen() {
  const images: ImagesExtructure[] = [
    {
      quantityColors: 4,
      nameLabel: 'Painting',
    },
    {
      quantityColors: 4,
      nameLabel: 'Meditation',
    },
    {
      quantityColors: 4,
      nameLabel: 'Training',
    },
  ];

  return (
    <div className={styles.screenContainer}>
      <div className={styles.header}>
        <div className={styles.ball} />
        <div className={styles.ballYellow} />
        <div className={styles.ball} />

        <Images images={images} />
      </div>
    </div>
  );
}
