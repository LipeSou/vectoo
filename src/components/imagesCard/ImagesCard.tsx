import MeditationGirl from '@/assets/images/MeditationGirl';
import styles from './images-card.module.css';

export default function ImagesCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}><MeditationGirl /></div>
      <div className={styles.description}>Meditation Girl</div>
    </div>
  );
}
