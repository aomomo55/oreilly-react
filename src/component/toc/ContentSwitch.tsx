import React from 'react';

import table from './data/toc.json';

type Props = {
  onTextClick: (id: number) => void;
};

const ContentSwitch: React.VFC<Props> = ({ onTextClick }: Props) => (
  <ul>
    {table.map(({ id, text }, idx) => (
      <li key={`TOC-${idx}`}>
        <a onClick={() => onTextClick(id)}>{text}</a>
      </li>
    ))}
  </ul>
);

export default ContentSwitch;
