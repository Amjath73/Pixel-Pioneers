import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

          .register-form {
            background: #fff;
            padding: 2rem 2.5rem;
            border-radius: 10px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 100%;
            max-width: 400px;
          }

          .register-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
            font-family: 'Roboto', sans-serif;
          }

          .register-input {
            width: 100%;
            padding: 0.75rem;
            margin: 0.75rem 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            transition: all 0.3s ease;
          }

          .register-input:focus {
            border-color: #6a11cb;
            outline: none;
            box-shadow: 0px 0px 5px rgba(106, 17, 203, 0.5);
          }

          .register-button {
            width: 100%;
            padding: 0.75rem;
            background: #6a11cb;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .register-button:hover {
            background: #2575fc;
          }

          .register-login-link {
            margin-top: 15px;
            color: #666;
            font-size: 14px;
          }

          .register-login-link span {
            color: #2575fc;
            font-weight: bold;
            cursor: pointer;
          }

          .register-login-link span:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Create an Account</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="register-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="register-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="register-input"
          required
        />
        <button type="submit" className="register-button">Register</button>
        <p className="register-login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    fontFamily: "'Roboto', sans-serif",
  },
};

export default Register;
