import React, { useEffect, useState } from 'react';
import API from '../services/api';


const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await API.get('/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.points} points ({user.cupsSaved} cups saved)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;