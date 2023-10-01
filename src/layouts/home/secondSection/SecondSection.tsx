'use client';

import { useState } from 'react';
import images from './__mocks__/images';
import { ImagesExtructure, StateImage } from './__types__/images';
import Screen from './screen/Screen';
import styles from './second-section.module.css';
import InputColorsContainer from './InputColorsContainer/InputColorsContainer';

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState<StateImage>(StateImage.PAINTING);
  const [imageTab, setImageTab] = useState<ImagesExtructure[]
  >(images);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Customize your way </h2>
      <p className={styles.description}>
        Customize the image with the face of your project or product.
      </p>
      <InputColorsContainer images={imageTab} setImages={setImageTab} activeTab={activeTab} />
      <Screen images={imageTab} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
