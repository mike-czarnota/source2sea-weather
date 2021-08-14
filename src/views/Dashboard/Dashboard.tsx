import React from 'react';
import LocationList from '../../components/LocationList';
import Layout from '../../components/Layout';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => (
  <Layout header={<span>Dashboard</span>} body={<LocationList />} />
);

export default Dashboard;
