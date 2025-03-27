import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New user:', form);
    alert('User created (simulated)');
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
        <h3 className="text-center mb-4 text-white">Create New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="name"
              name="name"
              value={form.name}
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
              value={form.email}
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
              value={form.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>

          <button type="submit" className="btn btn-light w-100 mt-2">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser; 