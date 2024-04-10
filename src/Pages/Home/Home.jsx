import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Houses from "./Houses";
import { Helmet } from "react-helmet-async";
import SlidesFlip from './SlidesFlip';
import SwiperSlides from "./SwiperSlides";
import CarouselAni from "./CarouselAni";

const Home = () => {
       const allHouses = useLoaderData();
       return (
         <div>
           <Helmet>
             <title>Lux Houzez | Home</title>
           </Helmet>
           <Hero />
           <SwiperSlides allHouses={allHouses}></SwiperSlides>
           <CarouselAni allHouses={allHouses}></CarouselAni>
           <Houses allHouses={allHouses}></Houses>
           <SlidesFlip></SlidesFlip>
         </div>
       );
};

export default Home;