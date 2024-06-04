import React, { useState, useEffect } from 'react';
import ClientProfile from './ClientProfile';

const ClientProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfileData() {
      try {
        const response = await fetch('/api/client-profile/1');
        const data = await response.json();
        if (response.ok) {
          setProfileData(data.result);
        } else {
          setError(data.error || 'Failed to fetch client profile data');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProfileData();
  }, []);

  return (
    <div>
      <h1>Client Profile Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ClientProfile profileData={profileData} />
      )}
    </div>
  );
};

export default ClientProfilePage;
