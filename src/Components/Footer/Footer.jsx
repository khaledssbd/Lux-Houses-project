import { Link } from "react-router-dom";
import downloadImg from "../../assets/play.png"
const Footer = () => {
  return (
    <footer className="mt-30 bg-[#030712] py-10 px-20">
      <div className="flex justify-between">
        <div className="mb-12 text-start">
          <Link
            to="/"
            className="btn btn-ghost hover:bg-amber-600 text-white text-4xl font-extrabold mb-4"
            data-aos="zoom-out-left"
          >
            Lux Houzez
          </Link>
          <p
            className="text-[#FFFFFFCC] text-lg font-normal"
            data-aos="zoom-out-right"
          >
            Lux Houzez is a digital platform where you <br /> get your desired
            house.
          </p>
        </div>
        <div>
          <h4
            className="text-white text-xl font-semibold mb-5"
            data-aos="zoom-out-right"
          >
            Download our app
          </h4>
          <img src={downloadImg} alt="" data-aos="zoom-out-left" />
        </div>
      </div>
      <hr />
      <div className="mt-8 flex justify-between">
        <div>
          <h5 className="text-[#FFFFFFB2] text-base font-normal">
            Copyright © 2024 - All right reserved by Lux Houzez
          </h5>
        </div>
        <div className="flex gap-8">
          <div>
            <h5 className="text-white text-base font-medium">
              Terms & condition
            </h5>
          </div>
          <div>
            <h5 className="text-white text-base font-medium">
              Return & refund policy
            </h5>
          </div>
          <div>
            <h5 className="text-white text-base font-medium">Privacy policy</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
