import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="md:mx-32 mx-3 md:mt-8 mt-4">
        <div>
          <Navbar />
        </div>
        <div className="min-h-[calc(100vh-230px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
