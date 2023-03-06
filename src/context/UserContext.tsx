import { createContext, useState, useEffect } from 'react';
import { Favorite, LogUser, RawUser, User, RawFavorite, Character } from '../../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export interface UserContextType {
  currentUser: User | null;
  isLogged: boolean;
  addNewUser: (user: RawUser) => void;
  logUser: (user: LogUser) => void;
  logout: () => void;
  addFavoriteToUser: (fav: Pick<Character, 'id' | 'name' | 'image'>) => void;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  isLogged: false,
  addNewUser: () => {},
  logUser: () => {},
  logout: () => {},
  addFavoriteToUser: () => {},
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

  function addFavoriteToUser(fav: Pick<Character, 'id' | 'name' | 'image'>) {
    const newFav: Favorite = {
      id: uuidv4(),
      character: fav,
    };
    const userToUpdate = users.find((u) => u.id === user?.id);

    if (userToUpdate) {
      setFavorites((prev) => [...prev, newFav]);
      const newUser = {
        ...userToUpdate,
        favoritesId: [...userToUpdate.favoritesId, newFav.id],
      };
      setUser(newUser);
      setUsers((prev) => {
        const newUsers = prev.filter((u) => u.id !== newUser.id);
        return [...newUsers, newUser];
      });
    } else {
      alert('You must be logged in to add favorites');
    }
  }

  return (
    <UserContext.Provider
      value={{ addFavoriteToUser, currentUser, isLogged, addNewUser, logUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
