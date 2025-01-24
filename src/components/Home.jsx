import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌿 Welcome to <span style={styles.highlight}>EcoCup</span>! 🌍</h1>
      <p style={styles.tagline}>
        Join us in reducing paper cup waste and making the planet greener, one cup at a time.
      </p>
     
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f0f8f5',
    fontFamily: "'Poppins', sans-serif",
    color: '#2c3e50',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '50px auto',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '20px 0',
  },
  highlight: {
    color: '#27ae60',
  },
  tagline: {
    fontSize: '1.2rem',
    margin: '20px 0',
    lineHeight: '1.6',
  },
  ctaContainer: {
    marginTop: '30px',
  },
  ctaButton: {
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s ease',
  },
  learnMoreButton: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s ease',
  },
};

// Add hover effects
styles.ctaButton[':hover'] = { backgroundColor: '#219150' };
styles.learnMoreButton[':hover'] = { backgroundColor: '#1a2c3e' };

export default Home;
