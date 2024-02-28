import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './background.module.css';
import { ImagesExtructure } from '../__types__/images';

interface BackgroundProps {
  activeImage: ImagesExtructure | undefined
  setImages: Dispatch<SetStateAction<ImagesExtructure[]>>
}

export default function Background({ activeImage, setImages }: BackgroundProps) {
  const onChangeBackground = (e: ChangeEvent<HTMLInputElement>) => {
    setImages((images) => images.map((image) => {
      if (image.nameLabel === activeImage?.nameLabel) {
        return { ...image, background: e.target.checked };
      }
      return image;
    }));
  };

  return (
    <div className={styles.background}>

      <label htmlFor="checkboxId" className={styles.label}>
        <input
          type="checkbox"
          id="checkboxId"
          checked={activeImage?.background}
          onChange={(e) => onChangeBackground(e)}
        />
        Background

      </label>
    </div>

  );
}
