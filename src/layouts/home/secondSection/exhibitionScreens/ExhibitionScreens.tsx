import GirlPainting from '@/assets/images/GirlPainting';
import GirlMeditating from '@/assets/images/GirlMeditating';
import { Dispatch, SetStateAction } from 'react';
import styles from './exhibitionScreens.module.css';
import { Colors, ImagesExtructure, StateImage } from '../__types__/images';
import InputColorsContainer from '../InputColorsContainer/InputColorsContainer';
import Background from '../background/Background';

interface ExhibitionScreensProps {
  activeTab: StateImage;
  images: ImagesExtructure[];
  setImages: Dispatch<SetStateAction<ImagesExtructure[]>>
}

export default function ExhibitionScreens(
  {
    activeTab,
    images,
    setImages,
  }: ExhibitionScreensProps,
) {
  const activeImage = images.find((image) => image.nameLabel === activeTab);

  const getColour = (colorName: string): string => {
    const color = activeImage?.colors.filter((image) => image.colorName === colorName);
    return (color as Colors[])[0].color;
  };

  return (
    <>
      <div className={styles.exhibitionScreensContainer}>
        <div className={styles.exibitionScreenHeader}>
          <div className={styles.iconBall} />
          <div className={styles.navBar} />
        </div>
        <div className={styles.webContainer}>
          <div className={styles.backgroundContainer}>
            <Background />
          </div>
          <div className={styles.images}>
            {activeTab === StateImage.PAINTING && <GirlPainting color1={getColour('color1')} color2={getColour('color2')} width="80%" />}
            {activeTab === StateImage.MEDITATION && <GirlMeditating color1={getColour('color1')} color2={getColour('color2')} color3={getColour('color3')} />}

          </div>
          <div className={styles.webDescriptionContainer}>
            <InputColorsContainer images={images} setImages={setImages} activeTab={activeTab} />
          </div>
        </div>
      </div>
      <div className={styles.spacer} />
    </>
  );
}
