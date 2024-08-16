import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/AuthContext';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const {logout} = useAuth()
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Add your sign-out logic here
    console.log('Sign out clicked');
    logout()
    navigate("/")

  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', paddingTop: '40px' }}>
      <CDBSidebar textColor="#333" backgroundColor="#ffff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} className="font-semibold">
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Exampler
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink 
              exact 
              to="/" 
              onClick={() => setActiveItem('/')} 
              className={activeItem === '/' ? 'activeClicked' : ''}
            >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink 
              exact 
              to="/completed-exams" 
              onClick={() => setActiveItem('/completed-exams')} 
              className={activeItem === '/completed-exams' ? 'activeClicked' : ''}
            >
              <CDBSidebarMenuItem icon="table">Completed Exams</CDBSidebarMenuItem>
            </NavLink>
            <NavLink 
              exact 
              to="/pending-exams" 
              onClick={() => setActiveItem('/pending-exams')} 
              className={activeItem === '/pending-exams' ? 'activeClicked' : ''}
            >
              <CDBSidebarMenuItem icon="user">Pending Exams</CDBSidebarMenuItem>
            </NavLink>
            <NavLink 
              exact 
              to="/analytics" 
              onClick={() => setActiveItem('/analytics')} 
              className={activeItem === '/analytics' ? 'activeClicked' : ''}
            >
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div style={{ padding: '50px 20px 5px' }}>
            <CDBSidebarMenuItem icon="sign-out-alt" onClick={handleSignOut}>
              Sign Out
            </CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
