import React from "react";
import {
  useUser,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <SignedIn>
        <div className="profile-wrapper">
          <div className="profile-card">
            <div className="profile-card-topbar"></div>

            <div className="profile-header-content">
              <span className="profile-verified-badge">
                <i className="bi bi-patch-check-fill me-1"></i> G-Shop Member
              </span>
              <h2 className="profile-title">My Profile</h2>
            </div>

            <div className="profile-avatar-container">
              <div className="profile-avatar-ring">
                <img
                  src={user?.imageUrl}
                  alt={user?.fullName || "User Profile"}
                  className="profile-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
                  }}
                />
              </div>
            </div>

            <h4 className="profile-name">
              {user?.fullName || user?.firstName || "Fresh Shopper"}
            </h4>

            <div className="profile-email-badge">
              <i className="bi bi-envelope-fill me-2"></i>
              <span>{user?.primaryEmailAddress?.emailAddress || "Verified Member"}</span>
            </div>

            <div className="profile-actions">
              <button
                type="button"
                className="btn profile-shop-btn"
                onClick={() => navigate("/")}
              >
                <i className="bi bi-basket2-fill me-2"></i>Go to Shop
              </button>

              <div className="profile-userbutton-wrapper" title="Manage Clerk Account">
                <UserButton afterSignOutUrl="/login" />
              </div>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="profile-wrapper">
          <div className="profile-card profile-signedout-card">
            <div className="profile-card-topbar"></div>
            
            <div className="profile-lock-icon-wrap">
              <i className="bi bi-person-lock"></i>
            </div>

            <h3 className="profile-title mb-2">Account Required</h3>
            <p className="profile-subtitle mb-4">
              Please login with your account to view your G-Shop profile.
            </p>

            <div className="profile-signedout-actions">
              <button
                type="button"
                className="btn profile-shop-btn px-4"
                onClick={() => navigate("/login")}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>Login Now
              </button>

              <button
                type="button"
                className="btn profile-home-btn"
                onClick={() => navigate("/")}
              >
                <i className="bi bi-house-door me-1"></i>Back to Home
              </button>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default Profile;
