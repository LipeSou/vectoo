'use client';

import { Dispatch, SetStateAction } from 'react';
import { ImagesExtructure, StateImage } from '../__types__/images';

interface InputColorsProps {
  images: ImagesExtructure[],
  setImages: Dispatch<SetStateAction<ImagesExtructure[]>>
  activeTab: StateImage,
}

export default function InputColors({ images, activeTab, setImages }:InputColorsProps) {
  const activeImage = images.find((image) => image.nameLabel === activeTab);

  const setColor = (color: string, targetColorName: string) => {
    const updateImages = images.map((image) => {
      if (image.nameLabel === activeTab) {
        const colorIndex = image.colors.findIndex((colorImage) => (
          colorImage.colorName === targetColorName
        ));
        if (colorIndex !== -1) {
          const updatedColors = [...image.colors];
          updatedColors[colorIndex] = { ...updatedColors[colorIndex], color };

          return { ...image, colors: updatedColors };
        }
      }
      return image;
    });
    setImages(updateImages);
  };

  return (
    <div>
      {activeImage?.colors.map((color) => (
        <input type="color" value={color.color} onChange={({ target }) => setColor(target.value, color.colorName)} />
      ))}
    </div>
  );
}
