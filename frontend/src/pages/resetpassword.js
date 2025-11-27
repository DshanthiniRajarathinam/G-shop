import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [form, setForm] = useState({ email: '', newPassword: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:6005/reset-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Password reset successful! Redirecting to Sign In...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      console.error('Reset error:', error);
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Center Form */}
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="card shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">🔒 Reset Password</h3>
            {message && (
              <div className="alert alert-warning text-center" role="alert">
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your registered email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="newPassword" className="form-label fw-bold">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  className="form-control"
                  placeholder="Enter new password"
                  value={form.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer (slightly above bottom) */}
    </div>
  );
}

export default ResetPassword;
