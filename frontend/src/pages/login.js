import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:6005/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      let result;
      try {
        result = await res.json();
      } catch (jsonErr) {
        console.error("Invalid JSON response:", jsonErr);
        setMessage("❌ Server returned invalid response.");
        return;
      }

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/profile");
      } else {
        setMessage(`❌ ${result.message || "Login failed"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("❌ Could not reach server");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Centered Login Form */}
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/resetpassword" className="text-decoration-none">Forgot password?</Link>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>

              <div className="text-center">
                Don't have an account? <a href="/register">Register now</a>
              </div>

              {message && (
                <div className={`alert mt-3 ${message.startsWith("✅") ? "alert-success" : "alert-danger"}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Login;
