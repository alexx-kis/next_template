import { generatePaths } from '@/utils/utils';
import { PREFIX, Ext } from './const';

// %======================== images ========================% //

const imagesPath = `.${PREFIX}/img`;

export const Path = {
  ICONS: `${imagesPath}/icons`,
};

// %------------------------ icons ------------------------% //
export const ICONS = generatePaths(Path.ICONS, [
  'icon-name',

], Ext.SVG);