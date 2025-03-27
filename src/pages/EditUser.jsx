import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: ''
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error('Error fetching user:', err));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user:', user);
    alert('User updated (simulated)');
    navigate('/users');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to right, #000000, #1c1c1c)',
        color: '#fff',
      }}
    >
      <div
        className="p-4 rounded shadow"
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#111',
          border: '1px solid #333',
        }}
      >
        <h3 className="text-center mb-4 text-white">Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white">Username</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>

          <button type="submit" className="btn btn-light w-100 mt-2">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
