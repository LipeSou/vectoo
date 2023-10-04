'use client';

import { ChromePicker } from 'react-color';
import { useState, useEffect, useRef } from 'react';
import styles from './color-picker.module.css';

interface ColorPickerProps {
  color: string;
  colorName: string;
  setColor: (color: string, targetColorName: string) => void;
}

export default function ColorPicker({ color, colorName, setColor }: ColorPickerProps) {
  const [showSketchPicker, setShowSketchPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current
        && event.target instanceof Node
        && !colorPickerRef.current.contains(event.target)) {
        setShowSketchPicker(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={colorPickerRef} className={styles.colorPicker}>
      <button
        type="button"
        onClick={() => setShowSketchPicker(true)}
        aria-label="Selecione uma Cor"
      >
        <div style={{ backgroundColor: color, width: '24px', height: '24px' }} />
      </button>
      {showSketchPicker && (
        <div className={styles.colorPickerContainer}>
          <ChromePicker
            color={color}
            onChangeComplete={(newColor) => setColor(newColor.hex, colorName)}
          />
        </div>
      )}

    </div>
  );
}
