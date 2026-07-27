import React from "react";
import {
  useUser,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./profile.css";   // 👈 add this

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <SignedIn>
        <div className="profile-wrapper">
          <div className="profile-card">

            <h2 className="profile-title">My Profile</h2>

            <img
              src={user?.imageUrl}
              alt="Profile"
              className="profile-img"
            />

            <h5 className="mt-3">{user?.fullName}</h5>
            <p className="text-muted">
              {user?.primaryEmailAddress?.emailAddress}
            </p>

            <div className="profile-actions">
              <button
                className="btn btn-success px-4"
                onClick={() => navigate("/")}
              >
                Go to Shop
              </button>

              <UserButton afterSignOutUrl="/login" />
            </div>

          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="container mt-5 text-center">
          <h4>Please login to view profile</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </SignedOut>
    </>
  );
};

export default Profile;
