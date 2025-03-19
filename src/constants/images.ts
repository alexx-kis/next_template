import { generatePaths } from '@/utils/utils';
import { basePath, Extension } from './const';

// %======================== images ========================% //

const imagesPath = `.${basePath}/img`;

export const Path = {
  ICONS: `${imagesPath}/icons`,
};

// %------------------------ icons ------------------------% //
export const icons = generatePaths(Path.ICONS, [
  'icon-name',

], Extension.SVG);