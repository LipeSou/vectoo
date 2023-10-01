'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './screen.module.css';
import ExhibitionScreens from '../exhibitionScreens/ExhibitionScreens';
import Images from '../images/Images';
import { ImagesExtructure, StateImage } from '../__types__/images';

interface ScreenProps {
  images: ImagesExtructure[];
  activeTab: StateImage;
  setActiveTab: Dispatch<SetStateAction<StateImage>>
}

export default function Screen({ images, activeTab, setActiveTab }: ScreenProps) {
  return (
    <div className={styles.screenContainer}>
      <div className={styles.header}>
        <div className={styles.ball} />
        <div className={styles.ballYellow} />
        <div className={styles.ball} />
        {/* switch images */}
        <Images
          images={images}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* exhibition screens */}
      <ExhibitionScreens images={images} activeTab={activeTab} />
    </div>
  );
}
