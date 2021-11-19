import React from 'react';

import table from '../data/contents.json';

type Props = {
  onTextClick: (id: number) => void;
};

const ContentSwitch: React.VFC<Props> = ({ onTextClick }: Props) => (
  <ul>
    {table.map(({ id, text }, idx) => (
      <li key={`contents-${idx}`}>
        <a onClick={() => onTextClick(id)}>{text}</a>
      </li>
    ))}
  </ul>
);

export default ContentSwitch;
