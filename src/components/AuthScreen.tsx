import { useLocation } from 'react-router-dom';

interface AuthScreenProps {
  children: React.ReactNode;
}

export function AuthScreen({ children }: AuthScreenProps) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-7'>
      <h1 className='font-bold text-5xl text-center'>{isLoginPage ? 'Log in' : 'Sign up'}</h1>
      <div className='max-w-md w-full'>{children}</div>
    </div>
  );
}

AuthScreen.Body = function ({ children }: AuthScreenProps) {
  return <div className='shadow bg-gray-700 p-6 rounded-lg'>{children}</div>;
};

AuthScreen.BelowCard = function ({ children }: AuthScreenProps) {
  return <div className='mt-2 justify-center flex gap-3'>{children}</div>;
};
