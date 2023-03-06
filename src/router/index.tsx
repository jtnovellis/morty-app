import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, RootLayout } from '../layouts';
import {
  CharDetailPage,
  ErrorPage,
  HomePage,
  Login,
  Signup,
  EpisodesPage,
  EpisodeDetailPage,
  LocationPage,
  LocationDetailPage,
} from '../pages';
import { Wrapper } from '../components';

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RootLayout />,
        path: '/',
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'characters/:id',
            element: <CharDetailPage />,
          },
          {
            path: 'episodes',
            element: <EpisodesPage />,
          },
          {
            path: 'episodes/:id',
            element: <EpisodeDetailPage />,
          },
          {
            path: 'locations',
            element: <LocationPage />,
          },
          {
            path: 'locations/:id',
            element: <LocationDetailPage />,
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
