import { TableOfContent } from './interface';

declare module '../data/toc.json' {
  const table: TableOfContent[];
  export = table;
}
