import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import HouseDetail from '../Pages/HouseDetail/HouseDetail';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import UserProfile from '../Pages/UserProfile/UserProfile';
import PrivateRoute from './PrivateRoute';
import FavouriteHouses from '../Pages/FavouriteHouses/FavouriteHouses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: () => fetch('/houses.json'),
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/house/:estate_id',
        loader: () => fetch('/houses.json'),
        element: (
          <PrivateRoute>
            <HouseDetail />
          </PrivateRoute>
        ),
      },
      {
        path: '/favourite-houses',
        loader: () => fetch('/houses.json'),
        element: (
          <PrivateRoute>
            <FavouriteHouses />
          </PrivateRoute>
        ),
      },
      {
        path: '/update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/user-profile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
