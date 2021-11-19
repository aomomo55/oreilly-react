import React from 'react';

import table from '../data/contents.json';

type Props = {
  onTextClick: (id: number) => void;
};

const ContentSwitch: React.VFC<Props> = ({ onTextClick }: Props) => {
  const li: React.CSSProperties = {
    marginTop: '0.4rem',
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'HighlightText',
  };

  return (
    <ul>
      {table.map(({ id, text }, idx) => (
        <li key={`contents-${idx}`} style={li}>
          <a onClick={() => onTextClick(id)}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default ContentSwitch;
