import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import { addToFavourite, getFavouriteHouses } from '../../Utils/Utils';
import { useEffect, useState } from 'react';

const HouseDetail = () => {
  const allHouses = useLoaderData();
  const favouriteHouses = getFavouriteHouses();
  const [showCheckOut, setShowCheckOut] = useState(false);
  const { estate_id: Id } = useParams();
  const house = allHouses.find(h => h.estate_id === parseInt(Id));

  const {
    segment_name,
    estate_title,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = house;

  useEffect(() => {
    const isExist = favouriteHouses.find(b => b === Id);
    if (isExist) {
      setShowCheckOut(true);
    }
  }, [favouriteHouses, Id]);

  const makeItFavourite = Id => {
    addToFavourite(Id);
    setShowCheckOut(true);
  };

  return (
    <div className="my-6 md:my-11">
      <Helmet>
        <title>LuxHouzez | House Details: {Id}</title>
      </Helmet>
      <div className="flex justify-center items-center mb-5 md:mb-10 animate__animated animate__backInUp">
        <img className="h-1/2 rounded-xl" src={image} alt="" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="col-span-3 flex flex-col gap-5 animate__animated animate__backInUp">
          <h3 className="text-[#131313] text-start font-play text-[20px] md:text-[40px] font-bold">
            {estate_title}
          </h3>
          <h3 className="text-[#131313CC] text-start text-base md:text-xl font-medium">
            Segment: {segment_name}
          </h3>
          <div className="flex gap-3">
            <button className="p-2 hover:text-[#131313] text-white bg-[#A58A56] rounded-sm text-start text-sm font-normal">
              Featured
            </button>
            <button className="p-2 text-white bg-[#000000A6] rounded-sm text-start text-sm font-normal">
              {status}
            </button>
          </div>
          <div className="flex items-center">
            <IoLocationOutline />
            <h4 className="ml-2">{location}</h4>
          </div>
          <h3 className="text-[#131313CC] text-lg md:text-xl font-medium mb-4 pb-6 border-b">
            Description
          </h3>
          <h3 className="text-[#131313B2] text-start text-base font-normal">
            {description}
          </h3>
        </div>

        <div className="animate__animated animate__backInUp min-w-56">
          <div className="lg:mt-28 ml-4 flex flex-col mb-6">
            <h3 className="text-start text-[#A58A56] text-base font-medium mb-2">
              Facilities:
            </h3>
            <div className="text-left space-y-1 mb-4 ml-2 flex-grow">
              {facilities.map((facility, i) => (
                <h3 key={i} className="text-[#A58A56] text-sm font-medium">
                  {i + 1}
                  {'. '} {facility}
                </h3>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3">
              <h4 className="text-[#131313B2] text-base font-normal">Area:</h4>
              <div className="col-span-2 text-left">
                <h3 className="text-[#131313] text-base font-semibold">
                  {area}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <h4 className="text-[#131313B2] text-base font-normal">Price:</h4>
              <div className="col-span-2 text-left">
                <h3 className="text-[#131313] text-base font-semibold">
                  {price}
                </h3>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <button
                onClick={() => makeItFavourite(Id)}
                className={
                  showCheckOut
                    ? 'btn text-xs md:text-sm bg-green-300 hover:bg-green-300 text-white hover:text-black'
                    : 'btn text-xs md:text-sm bg-green-600 hover:bg-green-500 text-white hover:text-black'
                }
              >
                Add to Favourite
              </button>
              {showCheckOut && (
                <Link to="/favourite-houses">
                  <button className="btn text-xs md:text-sm bg-blue-600 text-white hover:bg-red-500 hover:text-black">
                    Check Favourites
                  </button>
                </Link>
              )}
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
