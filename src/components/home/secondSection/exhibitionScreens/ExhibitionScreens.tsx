import GirlPainting from '@/assets/images/GirlPainting';
import styles from './exhibitionScreens.module.css';

export default function ExhibitionScreens() {
  return (
    <>
      <div className={styles.exibitionScreenHeader}>
        <div className={styles.iconBall} />
        <div className={styles.navBar} />
      </div>
      <div className={styles.webContainer}>
        <div>
          <GirlPainting width="196px" height="256px" />
        </div>
        <div className={styles.webDescriptionContainer}>
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
        </div>
      </div>
    </>
  );
}
