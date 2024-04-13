import { useEffect, useState } from 'react';
import { getFavouriteHouses, removeFromFavourite } from '../../Utils/Utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const FavouriteHouses = () => {
  const allHouses = useLoaderData();
  const [showHouses, setShowHouses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceToShow, setTotalPriceToShow] = useState('');

  useEffect(() => {
    const favouriteHousesId = getFavouriteHouses();
    const favouriteHouses = allHouses.filter(house =>
      favouriteHousesId.includes(JSON.stringify(house.estate_id))
    );
    setShowHouses(favouriteHouses);
  }, [allHouses]);

  const remove = id => {
    removeFromFavourite(JSON.stringify(id));
    const favouriteHousesId = getFavouriteHouses();
    const favouriteHouses = allHouses.filter(house =>
      favouriteHousesId.includes(JSON.stringify(house.estate_id))
    );
    setShowHouses(favouriteHouses);
  };

  useEffect(() => {
    setTotalPrice(
      showHouses.reduce((total, house) => {
        const price = Number(house.price.replace(/[$,]/g, ''));
        return total + price;
      }, 0)
    );
    setTotalPriceToShow(
      totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      })
    );
  }, [showHouses, totalPrice]);

  // SINGLE useEffect with single Dependency

  // useEffect(() => {
  //   setTotalPrice(
  //     showHouses.reduce((total, house) => {
  //       const price = Number(house.price.replace(/[$,]/g, ''));
  //       return total + price;
  //     }, 0)
  //   );
  // }, [showHouses]);

  // useEffect(() => {
  //   setTotalPriceToShow(
  //     totalPrice.toLocaleString('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //       minimumFractionDigits: 0,
  //     })
  //   );
  // }, [totalPrice]);

  return (
    <div className="mb-5 md:mb-10">
      <Helmet>
        <title>Lux Houzez | Favourites</title>
      </Helmet>
      <h3 className="text-xl sm:text-2xl md:text-3xl my-10 text-center">
        Favourite Houses ({showHouses.length})
      </h3>
      <div className="w-4/5 md:w-3/4 lg:w-1/2 mx-auto space-y-5">
        {showHouses.map((house, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-center items-center gap-6 border rounded-xl p-3 bg-slate-200"
          >
            <img
              className="sm:w-3/5 md:w-1/3 rounded-lg"
              src={house.image}
              alt=""
            />
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold">{house.estate_title}</h3>
              <h3 className="text-start text-sm font-sans">
                Type: {house.segment_name}
              </h3>
              <h3 className="text-start text-sm font-sans">
                Location: {house.location}
              </h3>
              <h3 className="text-start text-sm font-sans">
                Status: {house.status}
              </h3>
              <h3 className="text-start text-sm font-sans">
                Price: {house.price}
              </h3>
            </div>
            <button
              onClick={() => remove(house.estate_id)}
              className="btn btn-outline bg-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="text-end">
          {totalPrice > 0 ? (
            <>
              <h3 className="font-bold my-5">
                Total Price: {totalPriceToShow}
              </h3>
              <button className="btn btn-outline bg-green-500">
                Proceed to Buy
              </button>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouriteHouses;
