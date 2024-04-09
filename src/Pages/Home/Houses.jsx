import PropTypes from 'prop-types';
import House from './House';

const Houses = ({ allHouses }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img className="w-12 mb-8" src="lux.svg" alt="" />
        <h4 className="text-[#131313] font-play text-xl md:text-3xl font-medium mb-8 md:mb-14">
          Proud on providing the best service in the <br />
          industry and we want to make sure you find your dream property in no
          time
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allHouses.map((aHouse, idx) => (
          <House key={idx} aHouse={aHouse}></House>
        ))}
      </div>
    </div>
  );
};

export default Houses;

Houses.propTypes = {
  allHouses: PropTypes.array.isRequired,
};
