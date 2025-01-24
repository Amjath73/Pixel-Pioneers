import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ points: 0, cupsSaved: 0 });
  const [user, setUser] = useState(() => {
    // Retrieve and parse user data from localStorage
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!user || !user._id) {
        console.warn('User or user._id is not available');
        return;
      }

      try {
        const { data } = await API.get(`/users/${user._id}`);
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, [user]);

  if (!user) {
    return <p>Please log in to view your dashboard.</p>; // Fallback for missing user data
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Points: {stats.points}</p>
      <p>Cups Saved: {stats.cupsSaved}</p>
    </div>
  );
};

export default Dashboard;
