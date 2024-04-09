import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaLandmark } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const House = ({ aHouse }) => {
  const {
    estate_id,
    segment_name,
    estate_title,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = aHouse;
  return (
    <Link
      to={`/luxury/${estate_id}`}
      className="rounded-2xl border border-[#13131326] p-6 flex flex-col transition hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline"
    >
      <div className="rounded-2xl bg-[#F3F3F3]">
        <img
          className="rounded-2xl border border-gray-600"
          src={image}
          alt=""
        />
      </div>
      <div className="mt-4 ml-4 flex gap-3">
        <h3 className="text-start color-primary text-sm font-medium">
          Facilities:
        </h3>
        <div className="flex flex-col items-start gap-1 mb-4">
          {facilities.map((facility, i) => (
            <h3 key={i} className="color-primary text-sm font-medium">
              {i + 1}
              {'. '} {facility}
            </h3>
          ))}
        </div>
      </div>
      <h3 className="text-[#131313] font-play text-2xl font-bold flex-grow">
        {estate_title}
      </h3>
      <div className="pt-4 pb-5 mb-5 border-b-2 border-dashed flex gap-1">
        <IoLocationOutline />
        <h3 className="text-[#131313CC] text-sm font-normal">{location}</h3>
      </div>

      <div className="flex justify-between">
        <h3 className="text-[#131313CC] text-sm font-medium">{segment_name}</h3>
        <div className="flex">
          <h3 className="text-[#131313CC] text-sm font-medium">Land: {area}</h3>
        </div>
        <div className="flex items-center gap-2">
          <FaLandmark />
          <h3 className="text-[#131313CC] text-sm font-medium">{price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default House;

House.propTypes = {
  aHouse: PropTypes.object.isRequired,
};
