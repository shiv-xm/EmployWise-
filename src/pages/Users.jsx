import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import CreateUser from './CreateUser';  // Import CreateUser component

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => setUsers(res.data.data)) // Adjusted to match the API response structure
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        // Update local state after successful deletion
        setUsers(users.filter(user => user.id !== id));
        alert(`User with ID: ${id} deleted successfully.`);
      })
      .catch(err => console.error('Error deleting user:', err));
  };

  const toggleMode = () => setDarkMode(!darkMode);

  const handleAddUser = () => {
    navigate('/users/create');
  };

  const handleUserCreated = (newUser) => {
    setUsers([...users, newUser]); // Add the new user to the list
  };

  return (
    <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary btn-sm me-4" onClick={toggleMode} title="Toggle Theme">
              <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
            </button>
            <h2 className="mb-0">User Management</h2>
          </div>
          <button className={`btn btn-${darkMode ? 'primary' : 'success'} fw-semibold`} onClick={handleAddUser}>
            Add User
          </button>
        </div>

        <div className="table-responsive">
          <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : ''}`}>
            <thead className={darkMode ? 'table-secondary' : 'table-dark'}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name} {user.last_name}</td> {/* Updated to display both first and last name */}
                  <td>{user.email}</td>
                  <td>{user.first_name.toLowerCase()}</td> {/* Assuming 'username' is the lowercase of first name */}
                  <td className="d-flex gap-2 flex-wrap">
                    <button onClick={() => navigate(`/users/${user.id}`)} className="btn btn-info text-dark btn-sm">View</button>
                    <button onClick={() => navigate(`/users/${user.id}/edit`)} className="btn btn-warning text-dark btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Routes for CreateUser */}
      <Routes>
        <Route
          path="/users/create"
          element={<CreateUser onUserCreated={handleUserCreated} />}
        />
      </Routes>
    </div>
  );
};

export default UserList;
