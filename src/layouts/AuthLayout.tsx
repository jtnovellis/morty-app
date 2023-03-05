import { Outlet, useLocation, Link } from 'react-router-dom';
import { AuthScreen } from '../components';
import Logo from '../assets/icon-144x144.png';

interface AuthLayoutProps {}
export function AuthLayout({}: AuthLayoutProps) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <header className='bg-gray-700 absolute top-0 w-full'>
        <nav className='flex justify-between items-center px-4 py-3'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-16' />
          </Link>
        </nav>
      </header>
      <AuthScreen>
        <AuthScreen.Body>
          <Outlet />
        </AuthScreen.Body>
        <AuthScreen.BelowCard>
          <Link to={isLoginPage ? '/signup' : '/login'}>
            Do you have already an account?{' '}
            <span className='font-bold'>{isLoginPage ? 'Sign Up' : 'Log in'}</span>
          </Link>
        </AuthScreen.BelowCard>
      </AuthScreen>
    </>
  );
}
