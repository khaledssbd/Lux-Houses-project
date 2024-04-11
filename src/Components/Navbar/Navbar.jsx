import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('You logged out successfully!');
      })
      .catch(error => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="bg-slate-300" to="/">
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className="bg-slate-300 mx-2" to="/update-profile">
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-slate-300" to="/user-profile">
              User Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-200 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl md:text-3xl font-bold text-[#150B2B]"
        >
          Lux Houzez
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user.displayName} src={user?.photoURL || userImg} />
              </div>
            </label>

            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn bg-primary text-white hover:bg-green-500 hover:text-black ml-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;