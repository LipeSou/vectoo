import { ImagesExtructure, StateImage } from '../__types__/images';

const images: ImagesExtructure[] = [
  {
    colors: [
      { colorName: 'color1', color: '#F3AE15' },
      { colorName: 'color2', color: '#74C3E5' },
    ],
    nameLabel: StateImage.PAINTING,
  },
  {
    colors: [
      { colorName: 'color1', color: '#F3AE15' },
      { colorName: 'color2', color: '#74C3E5' },
      { colorName: 'color3', color: '#fadfa1' },
    ],
    nameLabel: StateImage.MEDITATION,
  },
];

export default images;
