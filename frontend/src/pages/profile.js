import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Profile Content */}
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="mb-3 text-center">👤 User Profile</h2>
          <p><strong>Name:</strong> {user.name || "N/A"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button 
            className="btn btn-danger px-3 py-2 mt-3 w-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Footer (slightly above bottom) */}
      
    </div>
  );
};

export default UserProfile;
