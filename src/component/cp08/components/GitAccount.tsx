import React, { CSSProperties } from 'react';
import { useGitFetchService } from '../services/useGitFetchService';

const style: {[key: string]: CSSProperties} = {
  result: {
    maxHeight: '400px',
    overflow: 'auto',
    whiteSpace: 'pre'
  }
}

const GitAccount: React.VFC = () => {
  const service = useGitFetchService();

  return (
    <>
      <h2 id="8.1">Get Git Account Information</h2>
      <label>
        {'Login Name:'}
        <input type={'text'} ref={service.loginNameRef} />
      </label>
      <button onClick={service.handleOnGetUserInformationClick}>Get</button>
      <h3>Result</h3>
      <p style={style.result}>{service.userInformation}</p>
    </>
  );
};

export default GitAccount;
