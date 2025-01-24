import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>🌿 EcoCup</h1>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/register" style={styles.link}>
            Register
          </Link>
        <Link to="/leaderboard" style={styles.link}>
          Leaderboard
        </Link>
        {localStorage.getItem('token') ? (
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <Link to="/login" style={styles.link}>
            Login
          </Link>
          
        )}
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#27ae60',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Poppins', sans-serif",
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  logoutButton: {
    backgroundColor: '#c0392b',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

// Add hover effects
styles.link[':hover'] = { color: '#bdc3c7' };
styles.logoutButton[':hover'] = { backgroundColor: '#a93226' };

export default Navbar;
