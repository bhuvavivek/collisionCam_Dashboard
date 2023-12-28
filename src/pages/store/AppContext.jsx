import { createContext, useEffect, useState } from "react";
import { api } from "utils/api";

export const AppContext = createContext();

const AppPrvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const getUser = async () => {
    try {
      setIsDataLoaded(false);
      const { data } = await api.get("/admin/auth/profile");

      if (data?.success) {
        setUser(data?.user);
      }
      setIsDataLoaded(true);
    } catch (error) {
      console.log(error);
      setIsDataLoaded(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AppContext.Provider value={{ user, setUser, isDataLoaded, getUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppPrvider;
