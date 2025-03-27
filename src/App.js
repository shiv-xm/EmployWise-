import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';  // Ensure you have the correct path for your Login component
import Users from './pages/Users';  // Ensure you have the correct path for your Users component
import UserDetails from './pages/UserDetails';  // Import UserDetails component
import EditUser from './pages/EditUser';  // Import EditUser component
import CreateUser from './pages/CreateUser';  // Import CreateUser component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} /> {/* Add UserDetails route */}
        <Route path="/users/:id/edit" element={<EditUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        
        {/* Redirect to login page for undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
