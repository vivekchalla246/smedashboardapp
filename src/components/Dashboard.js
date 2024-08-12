import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState({ date: '', allocation: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/data', newData);
      setData([...data, response.data]);
      setNewData({ date: '', allocation: '' });
    } catch (err) {
      setError('Error saving data');
    }
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard">
      <h1>Productivity Dashboard</h1>
      <Chart data={data} />
      <form onSubmit={handleSubmit} className="data-form">
        <input
          type="text"
          name="date"
          placeholder="Date (YYYY-MM-DD)"
          value={newData.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="allocation"
          placeholder="Allocation"
          value={newData.allocation}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default Dashboard;