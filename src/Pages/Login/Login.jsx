import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
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
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
        toast.success('Account logged-in successfully!');
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      })
      .catch(error => {
        console.error(error.message);
        if (error.message === 'Firebase: Error (auth/invalid-credential).') {
          toast.error('Email or password is wrong, try again or reset..');
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Lux Houzez | Login</title>
      </Helmet>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
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
        <div className="flex justify-center gap-4">
          <button
            onClick={() => signInWithSocial(facebookProvider)}
            className="btn btn-outline bg-green-400"
          >
            <FaFacebook /> Facebook
          </button>
          <button
            onClick={() => signInWithSocial(googleProvider)}
            className="btn btn-outline bg-green-400"
          >
            <FaGoogle /> Google
          </button>
          <button
            onClick={() => signInWithSocial(githubProvider)}
            className="btn btn-outline bg-green-400"
          >
            <FaGithub /> Github
          </button>
          <button
            onClick={() => signInWithSocial(twitterProvider)}
            className="btn btn-outline bg-green-400"
          >
            <FaTwitter /> Twitter
          </button>
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
