import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Houses from "./Houses";
import { Helmet } from "react-helmet-async";
// npm i react-helmet-async
import SlidesFlip from './SlidesFlip';
import SwiperSlides from "./SwiperSlides";
import CarouselAni from "./CarouselAni";

const Home = () => {
       const allHouses = useLoaderData();
       return (
         <div>
           <Helmet>
             <title>LuxHouzez | Home</title>
           </Helmet>
           <CarouselAni allHouses={allHouses}></CarouselAni>
           <Hero />
           <SwiperSlides allHouses={allHouses}></SwiperSlides>
           <Houses allHouses={allHouses}></Houses>
           <SlidesFlip/>
         </div>
       );
};

export default Home;