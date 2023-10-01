'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './images.module.css';
import { ImagesExtructure, StateImage } from '../__types__/images';

interface ImagesProps {
  images: ImagesExtructure[];
  activeTab: StateImage;
  setActiveTab: Dispatch<SetStateAction<StateImage>>
}

export default function Images({ images, activeTab, setActiveTab }: ImagesProps) {
  return (
    <>
      {/* tab images */}
      {
        images.map((image) => (
          <button
            onClick={() => setActiveTab(image.nameLabel)}
            type="button"
            className={
              activeTab === image.nameLabel
                ? styles.tabActive
                : styles.tabInactive
            }
            key={image.nameLabel}
          >
            <p className={styles.tabText}>
              {image.nameLabel}
            </p>
          </button>
        ))
      }
    </>
  );
}
