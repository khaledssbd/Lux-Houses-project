import { useEffect, useState } from 'react';
import { getFavouriteHouses, removeFromFavourite } from '../../Utils/Utils';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

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

  // useEffect with double dependency
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

  const sortHouses = property => {
    setShowHouses(prevData => {
      return [...prevData].sort((a, b) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
      });
    });
  };

  const sortByTitle = () => {
    sortHouses('estate_title');
  };
  const sortByType = () => {
    sortHouses('segment_name');
  };

  const removeNonNumericCharacters = str => {
    return str.replace(/[$,]/g, '');
  };

  const sortByPrice = () => {
    setShowHouses(prevData => {
      return [...prevData].sort((a, b) => {
        const priceA = parseFloat(removeNonNumericCharacters(a.price));
        const priceB = parseFloat(removeNonNumericCharacters(b.price));
        return priceA - priceB;
      });
    });
  };

  return (
    <div className="mb-5 md:mb-10">
      <Helmet>
        <title>LuxHouzez | Favourites</title>
      </Helmet>
      <h3 className="text-xl sm:text-2xl md:text-3xl my-10 text-center">
        Favourite Houses ({showHouses.length})
      </h3>
      {totalPrice > 0 && (
        <div className="dropdown mb-5 lg:mb-14">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-white text-sm lg:text-lg font-semibold py-1 lg:py-2 px-2 lg:px-5 rounded-lg bg-[#23BE0A] hover:bg-slate-800"
          >
            Sort By <span className="text-sm">(Ascending)</span>{' '}
            <RiArrowDropDownLine />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={sortByTitle}>
              <a>Title</a>
            </li>
            <li onClick={sortByType}>
              <a>Type</a>
            </li>
            <li onClick={sortByPrice}>
              <a>Price</a>
            </li>
          </ul>
        </div>
      )}
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
            <div className="flex flex-row md:flex-col gap-4 md:gap-8">
              <Link to={`/house/${house.estate_id}`}>
                <button className="btn btn-outline text-white hover:bg-amber-700 bg-primary rounded-lg p-2">
                  View Property
                </button>
              </Link>
              <button
                onClick={() => remove(house.estate_id)}
                className="btn btn-outline bg-red-500 rounded-lg p-2"
              >
                Remove
              </button>
            </div>
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
