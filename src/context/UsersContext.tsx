import React, { createContext, useEffect, useState, FC, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

type UsersContextType = {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
};

export const UsersContext = createContext<UsersContextType>({} as UsersContextType);

type UsersProviderProps = {
  children: ReactNode;
};

export const UsersProvider: FC<UsersProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const loadUsers = async () => {
    const data = await AsyncStorage.getItem("users");
    if (data) setUsers(JSON.parse(data));
  };

  const addUser = (user: User) => setUsers((prev) => [...prev, user]);

  const updateUser = (user: User) =>
    setUsers((prev) => prev.map((u) => (u.id === user.id ? user : u)));

  const deleteUser = (id: string) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  return (
    <UsersContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
