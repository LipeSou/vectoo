'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './images.module.css';

export interface ImagesExtructure {
  quantityColors: number,
  nameLabel: string
}

interface ImagesProps {
  images: ImagesExtructure[];
  activeTab: ImagesExtructure;
  setActiveTab: Dispatch<SetStateAction<ImagesExtructure>>
}

export default function Images({ images, activeTab, setActiveTab }: ImagesProps) {
  return (
    <>
      {/* tab images */}
      {
        images.map((image) => (
          <button
            onClick={() => setActiveTab(image)}
            type="button"
            className={
              activeTab.nameLabel === image.nameLabel
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
