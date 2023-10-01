import GirlPainting from '@/assets/images/GirlPainting';
import GirlMeditating from '@/assets/images/GirlMeditating';
import styles from './exhibitionScreens.module.css';
import { Colors, ImagesExtructure, StateImage } from '../__types__/images';

interface ExhibitionScreensProps {
  activeTab: StateImage;
  images: ImagesExtructure[];

}

export default function ExhibitionScreens({ activeTab, images }: ExhibitionScreensProps) {
  const activeImage = images.find((image) => image.nameLabel === activeTab);

  const getColour = (colorName: string): string => {
    const color = activeImage?.colors.filter((image) => image.colorName === colorName);
    return (color as Colors[])[0].color;
  };
  return (
    <div className={styles.exhibitionScreensContainer}>
      <div className={styles.exibitionScreenHeader}>
        <div className={styles.iconBall} />
        <div className={styles.navBar} />
      </div>
      <div className={styles.webContainer}>
        <div className={styles.images}>
          {activeTab === StateImage.PAINTING && <GirlPainting color1={getColour('color1')} color2={getColour('color2')} width="80%" />}
          {activeTab === StateImage.MEDITATION && <GirlMeditating color1={getColour('color1')} color2={getColour('color2')} />}
          {activeTab === StateImage.TRAINING && <GirlPainting width="60%" />}

        </div>
        <div className={styles.webDescriptionContainer}>
          <div className={styles.webTitleOrange} />
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
          <div className={styles.webTitle} />
        </div>
      </div>
    </div>
  );
}
