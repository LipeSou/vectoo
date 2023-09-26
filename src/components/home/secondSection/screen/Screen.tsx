'use client';

import { useState } from 'react';
import Images, { ImagesExtructure } from '../images/Images';
import styles from './screen.module.css';
import ExhibitionScreens from '../exhibitionScreens/ExhibitionScreens';

export default function Screen() {
  const [activeTab, setActiveTab] = useState<ImagesExtructure>({
    quantityColors: 4,
    nameLabel: 'Painting',
  });
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
        {/* switch images */}
        <Images
          images={images}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* exhibition screens */}
      <ExhibitionScreens />
    </div>
  );
}
