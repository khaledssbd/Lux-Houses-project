import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        logOut();
        navigate('/login');
        toast.success('Account created successfully! Please login..');
      })
      .catch(error => {
        console.error(error);
        if (error.message === 'Firebase: Error (auth/email-already-in-use).')
          {toast.error('Account already exists. Please log in..');}
      });
  };

  return (
    <div>
      <Helmet>
        <title>Lux Houzez | Register</title>
      </Helmet>
      <h2 className="text-3xl my-4 text-center">Please Register</h2>
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
        </div>
        <div className="form-control">
          <label className="label label-text">Password</label>
          <input
            type="password"
            required
            name="password"
            placeholder="Your Password"
            className="input input-bordered"
            autoComplete="true"
          />
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
      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link className="text-blue-600 font-bold" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
