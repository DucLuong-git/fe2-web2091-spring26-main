import { createContext, useState, ReactNode } from "react";
export type User = {
  name: string;
  avatar: string;
};
export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const userContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};