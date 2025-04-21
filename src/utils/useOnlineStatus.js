import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStattus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStattus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStattus(true);
    });
  }, []);
  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
