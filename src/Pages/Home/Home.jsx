import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Houses from "./Houses";
const Home = () => {
       const allHouses = useLoaderData();
       return (
         <div>
           <Hero />
           <Houses allHouses={allHouses}></Houses>
         </div>
       );
};

export default Home;