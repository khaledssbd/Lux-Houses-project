import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'animate.css';
// npm install animate.css --save
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// npm i aos

const Root = () => {
  useEffect(() => {
    AOS.init({ duration: '1000' });
  }, []);
  return (
    <div>
      <div className="lg:mx-28 md:20 sm:mx-5 mx-3 md:mt-8 mt-4">
        <div>
          <Navbar />
        </div>
        <div className="min-h-[calc(100vh-468px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
