export enum StateImage {
  PAINTING = 'Painting',
  MEDITATION = 'Meditation',
  TRAINING = 'Training',
}

export interface Colors {
  colorName: string,
  color: string,
}

export interface ImagesExtructure {
  colors: Colors[],
  nameLabel: StateImage;
}
