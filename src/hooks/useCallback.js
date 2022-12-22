import { useEffect } from 'react';

const useCallback = (callback, depends = []) => {
  useEffect(() => {
    callback();
  }, depends);
};


export default useCallback;
