import React from 'react';
import LocationList from '../../components/LocationList';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => (
  <div className="pt-5">
    <header>
      <div>
        <h1 className="text-4xl text-center font-bold">Dashboard</h1>
      </div>
    </header>

    <main>
      <LocationList />
    </main>
  </div>
);

export default Dashboard;
