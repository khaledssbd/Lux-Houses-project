import { Link, useNavigate } from 'react-router-dom';
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

const Register = () => {
  const {
    createUser,
    logOut,
    signInWithSocial,
    facebookProvider,
    googleProvider,
    githubProvider,
    twitterProvider,
    updateUserProfile,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const [passError, setPassError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setEmailError('');
    setPassError('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Must use a valid email address');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPassError('Password must have at least one Uppercase letter');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPassError('Password must have at least one Lowercase letter');
      return;
    }

    // if (!/[!@#$%^&*=+]/.test(password)) {
    //   setPassError(
    //     'Password must have at least one special character like !,@,#,$,%,^,&,*,=,+'
    //   );
    //   return;
    // }

    // if (!/\d{2,}/.test(password)) {
    //   setPassError('Password must have at least 2 numbers');
    //   return;
    // }

    // if (password.length < 8) {
    //   setPassError('Password must be of at least 8 characters');
    //   return;
    // }
    if (password.length < 6) {
      setPassError('Password must be of at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setPassError("Password and Confirm Password didn't match");
      return;
    }

    if (!isChecked) {
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo).then(() => {
          logOut().then(() => {
            navigate('/login');
            toast.success('Account created successfully! Please login');
          });
        });
      })
      .catch(error => {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          navigate('/login');
          toast.error('Account already exists. Please log in..');
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setEmailError('Must use a valid email address');
        }
      });
  };

  const socialSignIn = provider => {
    signInWithSocial(provider).then(() => {
      navigate(location?.state ? location.state : '/update-profile');
      toast.success('Successfully signed in');
    });
  };

  return (
    <div className="mb-5 md:mb-10">
      <Helmet>
        <title>LuxHouzez | Register</title>
      </Helmet>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium my-6 text-center">
        Please Register
      </h2>
      <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label label-text">Name</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label label-text">Photo URL</label>
          <input
            type="text"
            required
            name="photo"
            placeholder="Your Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label label-text">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
          />
          {emailError && (
            <small className="text-red-500 text-left mt-1">{emailError}</small>
          )}
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
          {passError && (
            <small className="text-red-500 text-left mt-1">{passError}</small>
          )}
        </div>
        <div className="form-control">
          <label className="label label-text">Confirm Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              name="confirmPassword"
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
          <div className="flex items-center justify-between">
            <div className="text-left pl-1 my-2">
              <input
                className="mr-1"
                onChange={event => setIsChecked(event.target.checked)}
                type="checkbox"
              />
              <small className="text-sm mt-1">
                Do you agree with our terms and conditions?
              </small>
            </div>
            {!isChecked && (
              <small className="text-red-500 mt-1">
                Please check on Terms and Conditions..
              </small>
            )}
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="">
        <h2 className="text-xl mt-10 mb-4">Register With</h2>
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
        Already have an account?{' '}
        <Link className="text-blue-600 font-bold ml-2" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
