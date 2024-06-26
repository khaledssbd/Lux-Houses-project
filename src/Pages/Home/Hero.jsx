import heroImg from '../../assets/heroImg.jpg'
import luxSvg from '../../assets/lux.svg';

const Hero = () => {

  return (
    <div
      style={{
        borderRadius: '24px',
        background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.40) 100%), url(${heroImg}) lightgray 0px -18.896px / 100% 123.31% no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'auto',
      }}
      className="mt-16 mb-10 h-[500px] w-auto rounded-3xl py-20 md:mb-[100px] md:h-[600px] md:p-[130px] flex flex-col items-center"
    >
      <img className="w-20 mb-8" src={luxSvg} alt="" data-aos="zoom-in-up" />
      <h3
        className="text-xl md:text-4xl font-black my-5 bg-gradient-to-r from-primary via-blue-600 to-secondary bg-300% text-transparent bg-clip-text animate-gradient"
        data-aos="zoom-in-up"
      >
        LuxHouzez
      </h3>
      <h3
        className="text-xl font-bold md:text-4xl bg-gradient-to-r from-primary via-green-600 to-secondary bg-300% text-transparent bg-clip-text animate-gradient"
        data-aos="fade-up-right"
      >
        Discover exclusive life style with a leading provider of <br /> high-end
        quality real estate
      </h3>
      <h5
        className="font-inter mb-10 mt-4 text-sm font-normal text-white md:text-lg px-3"
        data-aos="fade-down-right"
      >
        We are one of the leading developers in europe providing exquisitely
        designed modern living villas in <br /> unique locations. We have made
        out quality development an hallmark.
      </h5>
    </div>
  );
};
export default Hero;
