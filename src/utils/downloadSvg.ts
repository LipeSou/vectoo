import { MutableRefObject } from 'react';

const downloadSvg = (svgRef: MutableRefObject<Node>) => {
  const svgElement = svgRef.current;
  const serializedSVG = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([serializedSVG], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'customized_image.svg';
  a.click();

  URL.revokeObjectURL(url);
};

export default downloadSvg;
