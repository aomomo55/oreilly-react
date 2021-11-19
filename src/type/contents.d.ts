import { Contents } from './interface';

declare module '../data/contents.json' {
  const contents: Contents[];
  export = contents;
}
