import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UserDetail.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error('Error fetching user details:', err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-details-container">
      <div className="user-details-header">
        <h2>User Details</h2>
      </div>
      <div className="user-details-card">
        <h5 className="card-title text-center mb-4">{user.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Username:</strong> {user.username}</li>
          <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
          <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
          <li className="list-group-item"><strong>Website:</strong> {user.website}</li>
          <li className="list-group-item"><strong>Company:</strong> {user.company?.name}</li>
          <li className="list-group-item"><strong>Address:</strong> {user.address?.street}, {user.address?.city}</li>
        </ul>
      </div>
      <Link to="/users" className="link-no-underline">
        <button className="btn-back">Back to Users</button>
      </Link>
    </div>
  );
};

export default UserDetails;
