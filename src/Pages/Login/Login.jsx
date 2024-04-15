import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import googleSvg from '../../assets/google.svg';

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';

const Login = () => {
  const {
    logIn,
    signInWithSocial,
    facebookProvider,
    googleProvider,
    githubProvider,
    twitterProvider,
  } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : '/');
        toast.success('Account logged-in successfully!');
      })
      .catch(error => {
        if (error.message === 'Firebase: Error (auth/invalid-credential).') {
          toast.error('Email or password is wrong, try again or reset..');
        }
      });
  };

  const socialSignIn = provider => {
    signInWithSocial(provider).then(() => {
      navigate(location?.state ? location.state : '/');
      toast.success('Successfully signed in');
    });
  };

  return (
    <div className="mb-5 md:mb-10">
      <Helmet>
        <title>LuxHouzez | Login</title>
      </Helmet>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium my-10 text-center">
        Please Login
      </h2>
      <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label label-text">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label label-text">Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              name="password"
              placeholder="Your Password"
              className="input input-bordered w-full"
              autoComplete="true"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="-ml-10"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <h2 className="text-xl mt-10 mb-4">Login With</h2>
        <div className="md:flex justify-center items-center gap-4 ">
          <div className="flex justify-center gap-4 mb-3">
            <button
              onClick={() => {
                socialSignIn(googleProvider);
              }}
              className="btn btn-outline w-[116px]"
            >
              <img className="w-4" src={googleSvg} alt="" />
              Google
            </button>
            <button
              onClick={() => {
                socialSignIn(facebookProvider);
              }}
              className="btn btn-outline bg-[#1877F2] text-white w-[116px]"
            >
              <FaFacebook /> Facebook
            </button>
          </div>
          <div className="flex justify-center gap-4 mb-3">
            <button
              onClick={() => {
                socialSignIn(twitterProvider);
              }}
              className="btn btn-outline bg-[#1DA1F2] text-white w-[116px]"
            >
              <FaTwitter /> Twitter
            </button>
            <button
              onClick={() => {
                socialSignIn(githubProvider);
              }}
              className="btn btn-outline bg-[#333] hover:bg-[#4078c0] text-white w-[116px]"
            >
              <FaGithub /> Github
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        Do not have an account?
        <Link className="text-blue-600 font-bold ml-2" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
