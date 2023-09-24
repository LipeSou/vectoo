'use client';

import { useState } from 'react';
import styles from './images.module.css';

export interface ImagesExtructure {
  quantityColors: number,
  nameLabel: string
}

interface ImagesProps {
  images: ImagesExtructure[]
}

export default function Images({ images }: ImagesProps) {
  const [activeTab, setActiveTab] = useState<ImagesExtructure>({
    quantityColors: 4,
    nameLabel: 'Painting',
  });
  return (
    <>
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
