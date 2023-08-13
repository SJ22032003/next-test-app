import { useState, createContext, useContext } from "react";
import { TUsersData } from "@/pages/users";

const StoreContext = createContext<TStoreContext>({} as TStoreContext);

function Store({ children }: TStore) {
  const [title, setTitle] = useState("Basic Next App");
  const [userDetails, setUserDetails] = useState<TUsersData>({} as TUsersData);
  return (
    <StoreContext.Provider value={{ title, setTitle, userDetails, setUserDetails }}>
      {children}
    </StoreContext.Provider>
  );
}

export default Store;
export const useStore = () => useContext(StoreContext);

type TStore = {
  children: React.ReactNode;
};
type TStoreContext = {
  title: string;
  setTitle: (title: string) => void;
  userDetails: TUsersData;
  setUserDetails: (userDetails: TUsersData) => void;
};
