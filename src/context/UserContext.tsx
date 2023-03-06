import { createContext, useState, useEffect } from 'react';
import { Favorite, LogUser, RawUser, User } from '../../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export interface UserContextType {
  currentUser: User | null;
  isLogged: boolean;
  addNewUser: (user: RawUser) => void;
  logUser: (user: LogUser) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  isLogged: false,
  addNewUser: () => {},
  logUser: () => {},
  logout: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [users, setUsers] = useLocalStorage<User[]>('users', []);
  const [favorites, setFavorites] = useLocalStorage<Favorite[]>('favorites', []);
  const [isLogged, setIsLogged] = useLocalStorage<boolean>('isLogged', false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const isUser = users.find((u) => u.id === user?.id) as User;
    if (isUser) {
      setCurrentUser(isUser);
      setIsLogged(true);
    } else {
      setCurrentUser(null);
      setIsLogged(false);
    }
  }, [user]);

  function addNewUser(usr: RawUser) {
    const exists = users.find((u) => u.email === usr.email);

    if (!exists) {
      const newUser: User = {
        id: uuidv4(),
        ...usr,
        favoritesId: [],
      };

      setUsers((prev) => [...prev, newUser]);
      setUser(newUser);
      setIsLogged(true);
    } else {
      alert('User already exists');
    }
  }

  function logout() {
    setUser(null);
    setIsLogged(false);
  }

  function logUser(usr: LogUser) {
    const exists = users.find((u) => u.email === usr.email && u.password === usr.password);

    if (exists) {
      setUser(exists);
      setIsLogged(true);
    } else {
      alert('User not found or the credentials are incorrect');
    }
  }

  return (
    <UserContext.Provider value={{ currentUser, isLogged, addNewUser, logUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
