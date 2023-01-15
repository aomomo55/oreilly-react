import { Dispatch, RefObject, SetStateAction, useCallback, useRef, useState } from 'react';

type useGitFetchService = {
  userInformation: string;
  loginNameRef: RefObject<HTMLInputElement>;
  setUserInformation: Dispatch<SetStateAction<string>>;
  handleOnGetUserInformationClick: () => Promise<void>;
};

export const useGitFetchService: () => useGitFetchService = () => {
  const [userInformation, setUserInformation] = useState('');
  const [userInformationFromLocalStorage, setUserInformationFromLocalStorage] = useState('')
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
      setUserInformation('loginNameRef is Null!!');
    }
    const result = await getGitUserInformation(
      loginNameRef.current?.value as string,
    );
    setUserInformation(result);
  }, [setUserInformation]);

  const handleSaveToLocalStorage = useCallback(() => {
    localStorage.setItem('GithubUserInformation', userInformation)
  }, [userInformation])

  const loadFromLocalStorage = useCallback(() => {
    setUserInformationFromLocalStorage(localStorage.getItem('GithubUserInformation') || '')
  }, [])

  return {
    userInformation,
    userInformationFromLocalStorage,
    loginNameRef,
    setUserInformation,
    handleOnGetUserInformationClick,
    handleSaveToLocalStorage,
    loadFromLocalStorage
  };
};
