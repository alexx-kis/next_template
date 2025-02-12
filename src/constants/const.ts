// %======================== const ========================% //

export const basePath = process.env.NODE_ENV === 'production'
  ? '/'
  : '';

// namespace for reducer slices
export enum NameSpace {
  Process = 'PROCESS',
}