import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/layouts/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import LuxuryHouseDetail from '../Pages/LuxuryHouseDetail/LuxuryHouseDetail';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import UserProfile from '../Pages/UserProfile';
import PrivateRoute from './PrivateRoute';

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
        path: '/luxury/:estate_id',
        loader: () => fetch('/houses.json'),
        element: <LuxuryHouseDetail />,
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
