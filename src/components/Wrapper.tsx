import { Outlet } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';

export function Wrapper() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}
