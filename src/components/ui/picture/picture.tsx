import { extractExtension } from '@/utils/utils';
import Image from 'next/image';
import { RefObject } from 'react';
import './picture.scss';

// ^======================== Picture ========================^ //

type PictureProps = {
  bemClass?: string;
  imgClass?: string;
  src: string;
  sources: string[];
  alt?: string;
  width: number;
  height: number;
  ref?: RefObject<HTMLElement | null>;
};

function Picture(pictureProps: PictureProps): React.JSX.Element {

  const { src, alt, width, height, bemClass, imgClass, sources, ref } = pictureProps;

  return (
    <picture
      className={bemClass}
      ref={ref}
    >
      {
        sources.map((source) =>
          <source key={source}
            srcSet={source}
            type={`image/${extractExtension(source)}`}
          />
        )
      }
      <source
        key={src}
        srcSet={src}
        type={`image/${extractExtension(src)}`}
      />
      <Image
        src={src}
        alt={alt ? alt : ''}
        width={width}
        height={height}
        className={imgClass}
      />
    </picture>
  );
}
export default Picture;