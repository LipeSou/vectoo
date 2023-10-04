'use client';

import { Dispatch, SetStateAction } from 'react';
import ColorPicker from '@/components/colorPicker/ColorPicker';
import { ImagesExtructure, StateImage } from '../__types__/images';

interface InputColorsContainerProps {
  images: ImagesExtructure[],
  setImages: Dispatch<SetStateAction<ImagesExtructure[]>>
  activeTab: StateImage,
}

export default function InputColorsContainer(
  { images, activeTab, setImages }:InputColorsContainerProps,
) {
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
    <div style={{ display: 'flex' }}>

      {activeImage?.colors.map((color) => (
        <ColorPicker
          color={color.color}
          colorName={color.colorName}
          key={color.colorName}
          setColor={setColor}
        />
      ))}
    </div>
  );
}
