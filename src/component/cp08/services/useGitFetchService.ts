import { Dispatch, RefObject, SetStateAction, useCallback, useRef, useState } from 'react';

type useGitFetchService = {
  accountInformation: string;
  loginNameRef: RefObject<HTMLInputElement>;
  setAccountInformation: Dispatch<SetStateAction<string>>;
  handleOnGetUserInformationClick: () => Promise<void>;
};

export const useGitFetchService: () => useGitFetchService = () => {
  const [accountInformation, setAccountInformation] = useState('');
  const loginNameRef = useRef<HTMLInputElement>(null);

  const getGitUserInformation = useCallback(async (loginName: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${loginName}`);
      const userData = await response.json();
      return JSON.stringify(userData, null, "\t");
    } catch (error) {
      console.log({error});
      return 'check console'
    }
  }, []);

  const handleOnGetUserInformationClick = useCallback(async () => {
    if (!loginNameRef.current) {
      setAccountInformation('loginNameRef is Null!!');
    }
    const result = await getGitUserInformation(
      loginNameRef.current?.value as string,
    );
    setAccountInformation(result);
  }, [setAccountInformation]);

  return {
    accountInformation,
    loginNameRef,
    setAccountInformation,
    handleOnGetUserInformationClick,
  };
};
