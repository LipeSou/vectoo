import GirlPainting from '@/assets/images/GirlPainting';
import GirlMeditating from '@/assets/images/GirlMeditating';
import styles from './exhibitionScreens.module.css';
import { ImagesExtructure, StateImage } from '../images/Images';

interface ExhibitionScreensProps {
  activeTab: ImagesExtructure;
}

export default function ExhibitionScreens({ activeTab }: ExhibitionScreensProps) {
  return (
    <>
      <div className={styles.exibitionScreenHeader}>
        <div className={styles.iconBall} />
        <div className={styles.navBar} />
      </div>
      <div className={styles.webContainer}>
        <div className={styles.imageaaa}>
          {activeTab.nameLabel === StateImage.PAINTING && <GirlPainting width="60%" />}
          {activeTab.nameLabel === StateImage.MEDITATION && <GirlMeditating width="120%" />}
          {activeTab.nameLabel === StateImage.TRAINING && <GirlPainting width="60%" />}

        </div>
        <div className={styles.webDescriptionContainer}>
          <div className={styles.webTitleBlue} />
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
        </div>
      </div>
    </>
  );
}
