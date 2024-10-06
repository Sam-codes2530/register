import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [isSignUp, setIsSignUp] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match', {
          position: 'top-right', 
          autoClose: 3000,
        });
        return;
      }
      toast.success('Registration Successful', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    } else {
      toast.success('Sign In Successful', {
        position: 'top-right', 
        autoClose: 3000,
      });
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>{isSignUp ? 'Registration Portal' : 'Sign In Portal'}</h1>
      </div>
      <div className="right-panel">
        <div className="form-container">
          <h2>{isSignUp ? 'Create An Account' : 'Sign In'}</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder={isSignUp ? 'Create Password' : 'Password'}
              value={formData.password}
              onChange={handleChange}
              required
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}
            <button type="submit">{isSignUp ? 'Create Account' : 'Sign In'}</button>
          </form>
          <div className="social-login">
            <button className="google">
              <FontAwesomeIcon icon={faGoogle} />
              {isSignUp ? 'Sign up using Google' : 'Sign in using Google'}
            </button>
            <button className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
              {isSignUp ? 'Sign up using Twitter' : 'Sign in using Twitter'}
            </button>
          </div>
          <p>
            {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
            <a href="#" onClick={toggleForm}>
              {isSignUp ? 'Sign in here!' : 'Sign up here!'}
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
