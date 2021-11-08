import { ColorData } from './interface';

declare module './data/color-data.json' {
  const colorData: ColorData[];
  export = colorData;
}
