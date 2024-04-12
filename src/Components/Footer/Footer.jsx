import { Link } from 'react-router-dom';
import downloadImg from '../../assets/play.png';
const Footer = () => {
  return (
    <footer className="mt-30 bg-[#030712] py-10 px-5 md:px-20">
      <div className="flex justify-between items-center">
        <div className="mb-12 text-start">
          <Link
            to="/"
            className="btn btn-ghost hover:bg-amber-600 text-white text-2xl md:text-4xl font-extrabold mb-4"
            data-aos="flip-up"
          >
            Lux Houzez
          </Link>
          <p
            className="text-[#FFFFFFCC] text-base md:text-lg font-normal"
            data-aos="zoom-out-right"
          >
            Lux Houzez is a digital platform where you <br /> get your desired
            house.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4
            className="text-white text-xs sm:text-base md:text-xl font-semibold mb-5"
            data-aos="zoom-out-right"
          >
            Download our app
          </h4>
          <img
            className="w-2/3 sm:w-full"
            src={downloadImg}
            alt=""
            data-aos="zoom-out-right"
          />
        </div>
      </div>
      <hr />
      <div className="mt-8 flex justify-between items-center">
        <div>
          <h5 className="text-[#FFFFFFB2] hidden sm:flex font-normal">
            Copyright © 2024 - All right reserved by Lux Houzez
          </h5>
        </div>
        <div className="flex gap-8">
          <div>
            <h5 className="text-white text-sm md:text-base font-medium">
              Terms & condition
            </h5>
          </div>
          <div>
            <h5 className="text-white text-sm md:text-base font-medium">
              Return & refund policy
            </h5>
          </div>
          <div>
            <h5 className="text-white text-sm md:text-base font-medium">
              Privacy policy
            </h5>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <h5 className="text-[#FFFFFFB2] flex sm:hidden font-normal text-sm md:text-sm">
          Copyright © 2024 - All right reserved by Lux Houzez
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
