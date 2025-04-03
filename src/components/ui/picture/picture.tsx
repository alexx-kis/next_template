import { extractExtension } from '@/utils/utils';
import Image from 'next/image';
import { RefObject } from 'react';
import './picture.scss';

// ^======================== Picture ========================^ //

type WithWidthHeight = {
  width: number;
  height: number;
  size?: never;
};

type WithSize = {
  size: [number] | [number, number];
  width?: never;
  height?: never;
};

type PictureProps = {
  bemClass?: string;
  imgClass?: string;
  src: string;
  sources: string[];
  alt?: string;
  ref?: RefObject<HTMLElement | null>;
} & (WithWidthHeight | WithSize);

function Picture(pictureProps: PictureProps): React.JSX.Element {
  const { src, alt = '', bemClass, imgClass, sources, ref } = pictureProps;

  let width: number = 0;
  let height: number = 0;

  if ('width' in pictureProps && 'height' in pictureProps) {
    width = pictureProps.width as number;
    height = pictureProps.height as number;
  } else if ('size' in pictureProps) {
    if (pictureProps.size.length === 1) {
      width = pictureProps.size[0];
      height = pictureProps.size[0];
    } else if (pictureProps.size.length === 2) {
      [width, height] = pictureProps.size;
    }
  } else {
    throw new Error("Either 'width' and 'height' or 'size' must be provided.");
  }

  return (
    <picture className={bemClass} ref={ref}>
      {sources.map((source) => (
        <source key={source} srcSet={source} type={`image/${extractExtension(source)}`} />
      ))}
      <source key={src} srcSet={src} type={`image/${extractExtension(src)}`} />
      <Image src={src} alt={alt} width={width} height={height} className={imgClass} />
    </picture>
  );
}

export default Picture;
