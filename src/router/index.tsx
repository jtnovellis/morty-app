import { createBrowserRouter } from 'react-router-dom';
import { Wrapper } from '../components';
import { AuthLayout, RootLayout } from '../layouts';
import { HomePage, Login, Signup } from '../pages';

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    children: [
      {
        element: <RootLayout />,
        path: '/',
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);
