// %======================== const ========================% //

export const mapping: Record<string, string> = {
  'dev.msmedias.ru': '/advline-3.0/out',
  'dev.advline.ru': ''
};

export const PREFIX = mapping[process.env.NEXT_PUBLIC_HOSTNAME ?? ''] || '';

// namespace for reducer slices
export enum NameSpace {
  Process = 'PROCESS',
  OpenElementProcess = 'OPEN_ELEMENT_PROCESS'
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

export enum Ext {
  PNG = '.png',
  WEBP = '.webp',
  SVG = '.svg',
  GIF = '.gif',
  JPEG = '.jpeg',
}

export enum MediaPrefix {
  Desk = '_desk',
  Tab = '_tab',
  Mob = '_mob',
}

export enum OpenElement {
  OpenElement = 'OPEN_ELEMENT', //! change this
}