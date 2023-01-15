import React from 'react';

import { useContentSwitch } from './hooks/useContentSwitch';
import table from './data/contents.json';

import Menu from './component/cp05/Menu';
import Chapter6 from './component/cp06/Chapter6';
import Chapter7 from './component/cp07/Chapter7';
import ContentSwitch from './component/ContentSwitch';
import Chapter8 from './component/cp08/Chapter8';

const Container: React.VFC = () => {
  const style: React.CSSProperties = {
    width: '90vw',
    maxWidth: '1024px',
    margin: '1rem auto',
  };
  const contentBox: React.CSSProperties = {
    maxHeight: `calc(100vh - (3rem + 1.55rem * ${table.length}))`,
    overflow: 'auto',
  };

  const [contentId, setContentId] = useContentSwitch();

  return (
    <div style={style}>
      <ContentSwitch onTextClick={setContentId} />
      <div style={contentBox}>
        {contentId == 5 ? (
          <Menu title="Delicious Recipes" />
        ) : contentId == 6 ? (
          <Chapter6 />
        ) : contentId == 7 ? (
          <Chapter7 />
        ) : contentId == 8 ? (
          <Chapter8 />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Container;
