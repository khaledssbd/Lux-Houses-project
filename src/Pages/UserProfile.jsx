import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import userImg from '../assets/user.png';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Lux Houzez | Update Profile</title>
      </Helmet>
      <h2 className="text-2xl my-10 text-center">Your Profile</h2>
      <div className=" md:w-3/4 lg:w-1/2 mx-auto">
        <div className="pl-20">
          <h4 className="text-xl text-left">
            Your Name:
            <span className="text-amber-700 ml-32">{user.displayName}</span>
          </h4>
          <div className="flex justify-start gap-20 items-center my-10">
            <h4 className="text-xl text-left">Your Profile Picture:</h4>
            <img
              className="rounded-xl w-32"
              title={user.displayName}
              src={user?.photoURL || userImg}
            />
          </div>
          <h4 className="text-xl text-left">
            Your Email:
            <span className="text-amber-700 ml-32">{user.email}</span>
          </h4>
        </div>
      </div>

      <p className="text-center mt-10">
        Want to update your profile?{' '}
        <Link className="text-blue-600 font-bold ml-2" to="/update-profile">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default UserProfile;
