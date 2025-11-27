import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm: ""
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

    if (formData.password !== formData.confirm) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:6005/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Registered Successfully!");
        setFormData({ fullname: "", email: "", password: "", confirm: "" });
        navigate("/login");
      } else {
        setMessage(result.message || "❌ Registration Failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server Error. Try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  className="form-control"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

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
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirm" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirm"
                  className="form-control"
                  value={formData.confirm}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>

              <div className="text-center">
                Already have an account? <a href="/login">Login here</a>
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
    </div>
  );
};

export default Register;
