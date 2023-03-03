import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts';
import { HomePage } from '../pages';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
