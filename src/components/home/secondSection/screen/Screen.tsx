'use client';

import { useState } from 'react';
import Images, { ImagesExtructure, StateImage } from '../images/Images';
import styles from './screen.module.css';
import ExhibitionScreens from '../exhibitionScreens/ExhibitionScreens';

export default function Screen() {
  const [activeTab, setActiveTab] = useState<ImagesExtructure>({
    quantityColors: 4,
    nameLabel: StateImage.PAINTING,
  });
  const images: ImagesExtructure[] = [
    {
      quantityColors: 4,
      nameLabel: StateImage.PAINTING,
    },
    {
      quantityColors: 4,
      nameLabel: StateImage.MEDITATION,
    },
    // {
    //   quantityColors: 4,
    //   nameLabel: StateImage.TRAINING,
    // },
  ];

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
      <ExhibitionScreens activeTab={activeTab} />
    </div>
  );
}
