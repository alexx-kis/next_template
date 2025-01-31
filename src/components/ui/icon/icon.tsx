'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

// ^======================== Icon ========================^ //

type IconProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

function Icon({ src, width, height, className }: IconProps): React.JSX.Element {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const replaceWithSvg = async () => {
      try {
        const response = await fetch(src);
        const data = await response.text();
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

        if (!svg) {
          console.error(`No SVG found in ${src}`);
          return;
        }

        svg.removeAttribute('xmlns:a');

        if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
          svg.setAttribute('viewBox', `0 0 ${svg.getAttribute('width')} ${svg.getAttribute('height')}`);
        }

        if (className) {
          svg.setAttribute('class', className);
        }

        imgRef.current?.replaceWith(svg);
      } catch (error) {
        console.error('Error fetching the SVG:', error);
      }
    };

    replaceWithSvg();
  }, [src, className]);

  return <Image ref={imgRef} src={src} alt='' width={width} height={height} />;
}

export default Icon;
