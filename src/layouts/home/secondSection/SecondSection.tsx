'use client';

import { useState } from 'react';
import { StateImage } from './__types__/images';
import Screen from './screen/Screen';
import styles from './second-section.module.css';

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState<StateImage>(StateImage.PAINTING);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customize your way </h2>
      <p className={styles.description}>
        Customize the image with the face of your project or product.
      </p>
      <Screen activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
