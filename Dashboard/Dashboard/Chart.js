import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Productivity Dashboard</h1>
      <Chart data={data} />
    </div>
  );
};

export default Dashboard;
