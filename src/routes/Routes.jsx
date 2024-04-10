import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/layouts/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import LuxuryHouseDetail from '../Pages/LuxuryHouseDetail/LuxuryHouseDetail';

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
      //       {
      //         path: '/listed-books',
      //         loader: () => fetch('/books.json'),
      //         element: <ListedBooks />,
      //         children: [
      //           {
      //             index: true,
      //             element: <ReadBooks />,
      //             loader: () => fetch('/books.json'),
      //           },
      //           {
      //             path: 'wishlist',
      //             element: <Wishlist />,
      //             loader: () => fetch('/books.json'),
      //           },
      //         ],
      //       },
      //       {
      //         path: '/pages-to-read',
      //         loader: () => fetch('/books.json'),
      //         element: <PagesToRead />,
      //       },
      //       {
      //         path: '/terms',
      //         element: <Terms />,
      //       },
      //       {
      //         path: '/contact-us',
      //         element: <ContactUs />,
      //       },
    ],
  },
]);

export default router;
