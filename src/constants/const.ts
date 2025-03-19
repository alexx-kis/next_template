// %======================== const ========================% //

export const basePath = process.env.NODE_ENV === 'production'
  ? '/'
  : '';

// namespace for reducer slices
export enum NameSpace {
  Process = 'PROCESS',
}

export enum ViewportWidth {
  DESKTOP = 1440,
  TABLET = 834,
  MIDDLE = 577,
  MOBILE = 600,
}

export enum MediaQuery {
  DESKTOP = `(max-width: ${ViewportWidth.DESKTOP}px)`,
  TABLET = `(max-width: ${ViewportWidth.TABLET}px)`,
  MIDDLE = `(max-width: ${ViewportWidth.MIDDLE}px)`,
  MOBILE = `(max-width: ${ViewportWidth.MOBILE}px)`,
}

export enum Extension {
  PNG = '.png',
  WEBP = '.webp',
  SVG = '.svg',
  GIF = '.gif',
}