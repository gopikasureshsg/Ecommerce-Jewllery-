// UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Welcome, {userData.username}</h2>
      <p>Email: {userData.email}</p>

    </div>
  );
};

export default UserProfile;
