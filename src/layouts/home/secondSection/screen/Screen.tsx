'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import styles from './screen.module.css';
import ExhibitionScreens from '../exhibitionScreens/ExhibitionScreens';
import Images from '../images/Images';
import { ImagesExtructure, StateImage } from '../__types__/images';
import images from '../__mocks__/images';

interface ScreenProps {
  activeTab: StateImage;
  setActiveTab: Dispatch<SetStateAction<StateImage>>
}

export default function Screen({ activeTab, setActiveTab }: ScreenProps) {
  const [imageTab, setImageTab] = useState<ImagesExtructure[]
  >(images);

  return (
    <div className={styles.container}>
      <div className={styles.screenContainer}>
        <div className={styles.header}>
          <div className={styles.ball} />
          <div className={styles.ballYellow} />
          <div className={styles.ball} />
          {/* switch images */}
          <Images
            images={imageTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        {/* exhibition screens */}
        <ExhibitionScreens images={imageTab} setImages={setImageTab} activeTab={activeTab} />
      </div>
    </div>
  );
}
