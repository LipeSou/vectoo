'use client';

import { useState } from 'react';
import StarField from '@/components/canvas/Starfield';
import { StateImage } from './__types__/images';
import Screen from './screen/Screen';
import styles from './second-section.module.css';

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState<StateImage>(StateImage.PAINTING);

  return (
    <div className={styles.container}>
      <StarField />
      <div className={styles.stars} />
      <div className={styles.stars1} />
      <div className={styles.stars2} />
      <h2 className={styles.title}>Customize your way </h2>
      <p className={styles.description}>
        Customize the image with the face of your project or product.
      </p>
      <Screen activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
