import { Ext, MediaPrefix, ViewportWidth } from '@/constants/const';
import Image from 'next/image';
import { RefObject } from 'react';
import './picture.scss';

// ^======================== Picture ========================^ //

type SuperPictureProps = {
  bemClass?: string;
  src: string;
  size: number[];
  extensions: Ext[];
  alt?: string;
  ref?: RefObject<HTMLElement | null>;
  loading?: 'eager' | 'lazy' | undefined;
  responsive?: boolean;
};

const MEDIA_CONFIG: { prefix: MediaPrefix; media?: string; }[] = [
  { prefix: MediaPrefix.Desk, media: `(min-width: ${ViewportWidth.TABLET + 1}px)` },
  { prefix: MediaPrefix.Tab, media: `(min-width: ${ViewportWidth.MIDDLE + 1}px)` },
  { prefix: MediaPrefix.Mob, media: undefined },
];

const getMimeType = (ext: Ext) => {
  switch (ext) {
    case Ext.WEBP:
      return 'image/webp';
    case Ext.JPEG:
      return 'image/jpeg';
    case Ext.PNG:
      return 'image/png';
    default:
      return 'image/*';
  }
};

function Picture({ bemClass, src: source, size, extensions, alt, ref, loading, responsive = false }: SuperPictureProps): React.JSX.Element {

  const [width, height] = size;

  const fallbackExt = extensions.includes(Ext.PNG) ? Ext.PNG : extensions[0];

  const prioritizedExtensions = [...extensions].sort((a, b) => {
    if (a === Ext.WEBP) return -1;
    if (b === Ext.WEBP) return 1;
    return 0;
  });

  return (
    <picture key={source} className={bemClass ?? ''} ref={ref}>
      {responsive
        ? MEDIA_CONFIG.map(({ prefix, media }) =>
          prioritizedExtensions.map((ext) => {
            const src = `${source}${prefix}${ext}`;
            return (
              <source
                key={src}
                srcSet={src}
                type={ext === Ext.SVG ? 'image/svg+xml' : getMimeType(ext)}
                media={media}
              />
            );
          })
        )
        : prioritizedExtensions.map((ext) => {
          const src = `${source}${ext}`;
          return (
            <source
              key={src}
              srcSet={src}
              type={ext === Ext.SVG ? 'image/svg+xml' : getMimeType(ext)}
            />
          );
        })}

      <Image
        src={
          responsive
            ? `${source}${MediaPrefix.Mob}${fallbackExt}`
            : `${source}${fallbackExt}`
        }
        alt={alt ?? ''}
        width={width}
        height={height ?? width}
        loading={loading}
      />
    </picture>
  );
}

export default Picture;