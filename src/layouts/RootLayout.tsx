import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export function RootLayout() {
  return (
    <>
      <Header />
      <main className='px-4 mx-auto max-w-6xl mt-24'>
        <Outlet />
      </main>
    </>
  );
}
