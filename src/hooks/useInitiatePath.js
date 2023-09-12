import { useEffect, useState } from "react";

const useInitiatePath = (history) => {
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (history.location.pathname !== "/login") {
      setRedirectPath(history.location.pathname);
    }
  }, []);

  return redirectPath;
};

export default useInitiatePath;
