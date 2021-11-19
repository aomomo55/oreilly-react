import React from 'react';

import table from './data/toc.json';

const TableOfContent: React.VFC = () => (
  <ul>
    {table.map(({ id, text }, idx) => (
      <li key={`TOC-${idx}`}>
        <a href={`#${id}`}>{text}</a>
      </li>
    ))}
  </ul>
);

export default TableOfContent;
