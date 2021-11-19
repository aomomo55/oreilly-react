import React from 'react';
import { css } from '@emotion/react';

import table from '../data/contents.json';

type Props = {
  onTextClick: (id: number) => void;
};

const ContentSwitch: React.VFC<Props> = ({ onTextClick }: Props) => {
  const li = css({
    marginTop: '0.4rem',
    cursor: 'pointer',
    color: 'darkorange',
    ':hover': {
      textDecoration: 'underline',
    },
  });

  return (
    <ul>
      {table.map(({ id, text }, idx) => (
        <li key={`contents-${idx}`} css={li}>
          <a onClick={() => onTextClick(id)}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default ContentSwitch;
