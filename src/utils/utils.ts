// %======================== utils ========================% //

export const isEscKey = (e: KeyboardEvent) => e.key === 'Escape';


export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};


export const extractExtension = (source: string) => {
  const match = source.match(/\.[0-9a-z]+$/i);
  return match ? match[0].slice(1) : '';
};


export const toCamelCase = (str: string): string => str.replace(/-./g, x => x[1].toUpperCase());
export const toKebabCase = (str: string): string => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


export const generatePaths = (basePath: string, endPaths: string[], extension?: string): Record<string, string> => {
  return endPaths.reduce((acc, endPath) => {
    const formattedPath = extension ? `${endPath}${extension}` : endPath;
    acc[toCamelCase(endPath.replace(/\.[^.]+$/, ''))] = `${basePath}/${formattedPath}`;
    return acc;
  }, {} as Record<string, string>);
};
