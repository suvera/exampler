import React from 'react';
import Sidebar from '../Sidebar';

function Dashboard() {
  return (
    <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 p-4">
      <h1>Dashboard</h1>
   
    </div>
  </div>
  )
}

export default Dashboard