import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLandmark } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const HouseCard = ({ aHouse }) => {
  const {
    estate_id,
    segment_name,
    estate_title,
    image,
    price,
    status,
    area,
    location,
    facilities,
  } = aHouse;
  return (
    <div className="rounded-2xl border border-[#13131326] p-6 flex flex-col border-opacity-30 border-primary">
      <div className="rounded-2xl bg-[#F3F3F3]">
        <img
          className="rounded-2xl border border-gray-600"
          src={image}
          alt=""
        />
      </div>
      <h3 className="text-[#131313] font-play text-2xl font-bold flex-grow mt-4">
        {estate_title}
      </h3>
      <div className="mt-4 ml-5">
        <h3 className="text-start color-primary text-sm font-medium">
          Facilities:
        </h3>
        <div className="flex flex-col items-start gap-1 ml-1">
          {facilities.map((facility, i) => (
            <h3 key={i} className="color-primary text-xs font-medium">
              {i + 1}
              {'. '} {facility}
            </h3>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-5 mb-5 border-b-2 border-dashed flex gap-1">
        <IoLocationOutline />
        <h3 className="text-[#131313CC] text-sm font-normal">{location}</h3>
      </div>

      <div className="flex justify-between pb-5 mb-5 border-b-2 border-dashed">
        <h3 className="text-[#131313CC] text-sm font-medium">{segment_name}</h3>
        <div className="flex gap-2">
          <FaLandmark />
          <h3 className="text-[#131313CC] text-sm font-medium">{area}</h3>
        </div>
        <h3 className="text-[#131313CC] text-sm font-medium">{price}</h3>
      </div>
      <div className="flex justify-around items-center">
        <button className="p-2 text-white bg-[#000000A6] rounded-sm text-start text-sm font-normal">
          {status}
        </button>
        <Link to={`/house/${estate_id}`}>
          <button className="text-white hover:bg-amber-700 bg-primary rounded-lg p-2">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;

HouseCard.propTypes = {
  aHouse: PropTypes.object.isRequired,
};
