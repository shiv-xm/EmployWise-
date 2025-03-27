import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const [bgImage, setBgImage] = useState('');

  const backgroundImages = [
    "https://source.unsplash.com/1600x900/?technology,futuristic",
    "https://source.unsplash.com/1600x900/?nature,forest",
    "https://source.unsplash.com/1600x900/?city,night",
    "https://source.unsplash.com/1600x900/?space,galaxy",
    "https://source.unsplash.com/1600x900/?ocean,beach",
  ];

  useEffect(() => {
    // Randomly select a background image on component mount
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setBgImage(randomImage);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      navigate('/users');
    } catch (err) {
      setError('Invalid login credentials!');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div
        className="card p-5 shadow-lg text-white border-0 mb-5"
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '25px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
        }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: '#ffffff' }}>
          Welcome Back
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control bg-transparent text-white border-light"
              placeholder="name@example.com"
              required
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control bg-transparent text-white border-light"
              placeholder="Enter your password"
              required
              style={{ borderRadius: '10px' }}
            />
          </div>
          {error && <div className="alert alert-danger py-1">{error}</div>}
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-light fw-semibold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
